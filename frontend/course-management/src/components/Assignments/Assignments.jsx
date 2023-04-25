import { useRef,useEffect,useState } from "react"; 
import Header from "../Header/Header"
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Masonry from '@mui/lab/Masonry';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Assignments(){
    const nav = useNavigate()
    const [ass,setAss] = useState([]);
    const { cId } = useParams();
    console.log("c",cId)
    const userId = localStorage.getItem('userId');
    const redirectToAssignmentInfo = () => { 
        nav('/Assignment')
    }
    useEffect(() => {
        fetch(`http://localhost:8080/students/courses/${cId}/assignments/${userId}`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setAss(data)
            console.log(data)
        });
    },[])
    const heights = [150, 170, 190, 170, 110, 150, 130, 180, 150, 190, 100, 150, 100, 150, 160];

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));
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
            <div className="AssignmentListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        Your Courses
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
                            { ass.map((assigment) =>  
                                <Col md={3}>
                                <div className="cardParent">
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Assignment/${cId}/${assigment.assignmentId}/${assigment.id}`}>
                                    <div className="card" >
                                        <div className="primaryText">
                                            {assigment.name}
                                        </div>
                                        <div className="secondaryText">
                                            <div className="test">
                                            <div className={`StatusBadge ${assigment.status == "Not Started" || assigment.status == "Incomplete" ? "error" : ""} ${assigment.status == "Submitted" ? "warning" : ""} ${assigment  .status == "Completed" ? "success" : ""}`}></div>
                                            <span>{assigment.status}</span>
                                            </div>
                                            
                                            <div>Work on github and upload the link.</div>
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

export default Assignments