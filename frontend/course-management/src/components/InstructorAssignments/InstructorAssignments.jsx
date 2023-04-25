import {useEffect,useState } from "react"; 

import InstructorHeader from "../InstructorHeader/InstructorHeader";
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link, useNavigate,useParams } from "react-router-dom";
function InstructorAssignments(){
    const nav = useNavigate()
    const { id } = useParams();
    console.log("param",id)
    const [assignmentList,setAssignmentList] = useState([]);
    // const redirectToSubmittedStudents = (aId) => { 
    //     nav(`/ViewStudentsInAssignment/${id}/${aId}`)
    // }
    useEffect(() => {
        const userId = localStorage.getItem('userId');

        fetch(`http://localhost:8080/teachers/courses/courseAssignments/${id}/${userId}`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setAssignmentList(data)
            console.log(data)
        });
    },[])
    // const redirectToAddAss = () => { 
    //     nav(`/AddAssignments')
    // }


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
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/AddAssignments/${id}`}><input type="button" name="" id="" className="submit-login" value="Add Assignment" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="courseItems">    
                        <Container>
                            <Row>
                                {   assignmentList.map((assignmentList) => 
                                        <Col md={3}>
                                        <div className="cardParent">
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/ViewStudentsInAssignment/${id}/${assignmentList.id}`}><div className="card" >
                                                <div className="primaryText">
                                                    {assignmentList.name}
                                                </div>
                                                <div className="secondaryText">
                                                    {assignmentList.description}
                                                </div>
                                            </div>
                                            </Link>
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