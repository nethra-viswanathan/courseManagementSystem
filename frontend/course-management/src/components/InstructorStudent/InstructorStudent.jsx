import { useRef,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
function InstructorStudent(){
    const navigate = useNavigate();
    const redirectToAssignments = () => {
        navigate("/AssignmentList")
    }
    const [ins,setIns] = useState([]);
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        fetch(`http://localhost:8080/students/list_of_teachers`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setIns(data)
            console.log(data)
        });
    },[])
    return(
        <>
            <Header></Header>
            <div className="InstructorListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        Instructors
                    </div>
                    <div className="courseItems">
                    { ins.map((course) =>  
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
                                <div className="helpText">Here are the courses offered by this instructor</div>
                                <ol>
                                { course.courses.map((courseList) => 
                                    Object.keys(courseList).map((key) => (
                                        <Link to={`/AssignmentList/${key}`}><li key={key}>{courseList[key]}</li></Link>
                                    ))
                                )}
                                </ol>
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

export default InstructorStudent;