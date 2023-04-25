import Header from "../Header/Header";
import { useRef,useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
function HomeStudent(){
    const defaultOnErrorFn = useRef(window.onerror);
    const [course,setCourse] = useState([]);
    const userId = localStorage.getItem('userId');
    useEffect(() => {
    window.onerror = (...args) => {
        if (args[0] === 'ResizeObserver loop limit exceeded') {
        return true;
        } else {
        defaultOnErrorFn.current && defaultOnErrorFn.current(...args);
        }
    };
    return () => {
        window.onerror = defaultOnErrorFn.current;
    };
    }, []);
    const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        color: theme.palette.text.secondary,
    }));
    useEffect(() => {
        fetch(`http://localhost:8080/students/list_of_teachers`,{
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
            <Header></Header>
            <div className="courseListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        Your Courses
                    </div>
                    <div className="courseItems">
                    { course.map((course) =>  
                       
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>{course.teacher_name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                    { course.courses.map((courseList) => 
                                        Object.keys(courseList).map((key) => (
                                            <Link to={`/AssignmentList/${key}`}><li key={key}>{courseList[key]}</li></Link>
                                        ))
                                    )}
                                    </ul>
                                    
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

export default HomeStudent;