
import InstructorHeader from "../InstructorHeader/InstructorHeader"
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
function InstructorDashboard(){
    const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        color: theme.palette.text.secondary,
    }));
    const navigate = useNavigate();
    const redirectToAssignment = () => {
        navigate("/ViewAssignments")
    }
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
                        <Masonry columns={3} spacing={2}>
                                {heights.map((height, index) => (
                                    <Paper key={index} onClick={redirectToAssignment}>
                                        <StyledAccordion sx={{ minHeight: height }}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>
                                                {/* <div className="checkBoxParent">
                                                    <input type="checkbox" class="checkbox-input" id="checkbox" />
                                                    <label for="checkbox">
                                                        <span class="checkbox">
                                                        </span>
                                                    </label>
                                                </div> */}
                                                <span className="courseName">Advanced Cloud Computing</span></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>Contents</AccordionDetails>
                                        </StyledAccordion>
                                    </Paper>
                                ))}
                            </Masonry>
                    </div>

                </div>
            </div>
        </>
    )
}

export default InstructorDashboard