import Header from "../Header/Header";
import { useRef,useEffect } from "react";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function HomeStudent(){
    const defaultOnErrorFn = useRef(window.onerror);

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
    return(
        <>
            <Header></Header>
            <div className="courseListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        Your Courses
                    </div>
                    <div className="courseItems">
                        
                        <Masonry columns={3} spacing={2}>
                            {heights.map((height, index) => (
                                <Paper key={index}>
                                    <StyledAccordion sx={{ minHeight: height }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>
                                            <div className="checkBoxParent">
                                                <input type="checkbox" class="checkbox-input" id="checkbox" />
                                                <label for="checkbox">
                                                    <span class="checkbox">
                                                    </span>
                                                </label>
                                            </div>
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

export default HomeStudent;