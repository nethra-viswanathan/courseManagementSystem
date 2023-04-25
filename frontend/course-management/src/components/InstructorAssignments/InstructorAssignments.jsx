import {useEffect,useState } from "react"; 

import InstructorHeader from "../InstructorHeader/InstructorHeader";
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useNavigate,useParams } from "react-router-dom";
function InstructorAssignments(){
    const nav = useNavigate()
    const { id } = useParams();
    console.log("param",id)
    const [assignmentList,setAssignmentList] = useState([]);
    const redirectToSubmittedStudents = () => { 
        nav('/ViewStudentsInAssignment')
    }
    useEffect(() => {
        fetch(`http://localhost:8080/teachers/courses/courseAssignments/${id}`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setAssignmentList(data)
            console.log(data)
        });
    },[])
    const redirectToAddAss = () => { 
        nav('/AddAssignments')
    }


    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
    );
    return(
        <>
            <InstructorHeader></InstructorHeader>
            <div className="AssignmentListingParentIns">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="left">
                            <div className="text1">Assignments</div>
                            <div className="text2">View all assignments that fall under a course here</div>
                        </div>
                        <div className="right">
                            <div className="button-input">
                                <input type="button" name="" id="" className="submit-login" value="Add Assignment" onClick={redirectToAddAss} />
                            </div>
                        </div>
                    </div>
                    <div className="courseItems">    
                        <Container>
                            <Row>
                                {   assignmentList.map((assignmentList) => 
                                        <Col md={3}>
                                        <div className="cardParent">
                                            <div className="card" onClick={redirectToSubmittedStudents}>
                                                <div className="primaryText">
                                                    {assignmentList.name}
                                                </div>
                                                <div className="secondaryText">
                                                    {assignmentList.description}
                                                </div>
                                            </div>
                                        </div>
                                        </Col>
                                )}
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
        </>
    )
}

export default InstructorAssignments