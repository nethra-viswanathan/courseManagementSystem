
import InstructorHeader from "../InstructorHeader/InstructorHeader"
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
function InstructorDashboard(){
    const [course,setCourse] = useState([]);
    const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        color: theme.palette.text.secondary,
    }));
    const navigate = useNavigate();
    const redirectToAssignment = (id) => {
        // navigate("/ViewAssignments/"id)
    }
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        fetch(`http://localhost:8080/teachers/courses/${userId}`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setCourse(data)
            console.log(data)
        });
    },[])
    
    return(
        <>
            <InstructorHeader></InstructorHeader>
            <div className="InsCourseListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="text1">Your Courses</div>
                        <div className="text2">View all your created courses here</div>
                    </div>
                    <div className="courseItems">
                        { course.map((course) =>  
                        // <Masonry columns={3} spacing={2}>
                        //         {/* {heights.map((height, index) => ( */}
                        //             <Paper key={1}>
                        //                 <StyledAccordion sx={{ minHeight: 100 }}>
                        //                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        //                     <Typography>
                        //                         {/* <div className="checkBoxParent">
                        //                             <input type="checkbox" class="checkbox-input" id="checkbox" />
                        //                             <label for="checkbox">
                        //                                 <span class="checkbox">
                        //                                 </span>
                        //                             </label>
                        //                         </div> */}
                        //                         <span className="courseName">{course.course}</span></Typography>
                        //                     </AccordionSummary>
                        //                     <AccordionDetails>This course involves deep learning in {course.course}</AccordionDetails>
                        //                 </StyledAccordion>
                        //             </Paper>
                        //         {/* ))} */}
                        //     </Masonry>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>{course.course}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This course involves deep learning in {course.course}
                                    <Link to={`/ViewAssignments/${course?.id}`}><span>View Here</span></Link>
                                </Typography>
                            </AccordionDetails>
                         </Accordion>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default InstructorDashboard