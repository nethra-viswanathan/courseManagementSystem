import { useRef,useEffect } from "react"; 
import Header from "../Header/Header"
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Masonry from '@mui/lab/Masonry';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useNavigate } from "react-router-dom";
function InstructorAssignments(){
    const nav = useNavigate()
    const redirectToSubmittedStudents = () => { 
        nav('/Assignment')
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
            <Header></Header>
            <div className="AssignmentListingParentIns">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="left">
                            <div className="text1">Assignments</div>
                            <div className="text2">View all assignments that fall under a course here</div>
                        </div>
                        <div className="right">
                            <div className="button-input">
                                <input type="button" name="" id="" className="submit-login" value="Add Assignment" />
                            </div>
                        </div>
                    </div>
                    <div className="courseItems">
                        {/* <Box >
                            <Masonry columns={4} spacing={2}>
                                {heights.map((height, index) => (
                                <Item key={index} sx={{ height }} onClick={redirectToAssignmentInfo}>
                                    <div className="assignmentName">Assignment {index+1}</div>
                                    <div className="assignmentDesc">Create a responsive web page using Angular and SpringBoot.</div>
                                </Item>
                                ))}
                            </Masonry>
                        </Box> */}
                        {/* <Card sx={{ minWidth: 275,maxWidth: '24%' }} onClick={redirectToAssignmentInfo}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <div className="assignmentName">Assignment 1</div>
                                    <div className="assignmentDesc">Create a responsive web page using Angular and SpringBoot.</div>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275,maxWidth: '24%' }} onClick={redirectToAssignmentInfo}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <div className="assignmentName">Assignment 1</div>
                                    <div className="assignmentDesc">Create a responsive web page using Angular and SpringBoot.</div>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275,maxWidth: '24%' }} onClick={redirectToAssignmentInfo}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <div className="assignmentName">Assignment 1</div>
                                    <div className="assignmentDesc">Create a responsive web page using Angular and SpringBoot.</div>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275,maxWidth: '24%' }} onClick={redirectToAssignmentInfo}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <div className="assignmentName">Assignment 1</div>
                                    <div className="assignmentDesc">Create a responsive web page using Angular and SpringBoot.</div>
                                </Typography>
                            </CardContent>
                        </Card> */}
                        <Container>
                            <Row>
                                <Col md={3}>
                                <div className="cardParent">
                                    <div className="card" onClick={redirectToSubmittedStudents}>
                                        <div className="primaryText">
                                            Assignment 1
                                        </div>
                                        <div className="secondaryText">
                                            Create a responsive web page using Angular and SpringBoot.
                                        </div>
                                    </div>
                                </div>
                                </Col>
                                <Col md={3}>
                                <div className="cardParent">
                                    <div className="card" onClick={redirectToSubmittedStudents}>
                                        <div className="primaryText">
                                            Assignment 1
                                        </div>
                                        <div className="secondaryText">
                                            Create a responsive web page using Angular and SpringBoot.
                                        </div>
                                    </div>
                                </div>
                                </Col>
                                <Col md={3}>
                                <div className="cardParent">
                                    <div className="card" onClick={redirectToSubmittedStudents}>
                                        <div className="primaryText">
                                            Assignment 1
                                        </div>
                                        <div className="secondaryText">
                                            Create a responsive web page using Angular and SpringBoot.
                                        </div>
                                    </div>
                                </div>
                                </Col>
                                <Col md={3}>
                                <div className="cardParent">
                                    <div className="card" onClick={redirectToSubmittedStudents}>
                                        <div className="primaryText">
                                            Assignment 1
                                        </div>
                                        <div className="secondaryText">
                                            Create a responsive web page using Angular and SpringBoot.
                                        </div>
                                    </div>
                                </div>
                                </Col>
                                <Col md={3}>
                                <div className="cardParent">
                                    <div className="card" onClick={redirectToSubmittedStudents}>
                                        <div className="primaryText">
                                            Assignment 1
                                        </div>
                                        <div className="secondaryText">
                                            Create a responsive web page using Angular and SpringBoot.
                                        </div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
        </>
    )
}

export default InstructorAssignments