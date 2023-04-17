import { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function InstructorStudent(){
    const navigate = useNavigate();
    const redirectToAssignments = () => {
        navigate("/AssignmentList")
    }
    const defaultOnErrorFn = useRef(window.onerror);

    useEffect(() => {
    window.onerror = (...args) => {
        if (args[0] === 'ResizeObserver loop limit exceeded') {
            console.log("varutha")
            return true;
        } else {
        defaultOnErrorFn.current && defaultOnErrorFn.current(...args);
        }
    };
    return () => {
        window.onerror = defaultOnErrorFn.current;
        console.log("enanga",defaultOnErrorFn.current)
    };
    }, []);
    return(
        <>
            <Header></Header>
            <div className="InstructorListingParent">
                <div className="courseItemsSection">
                    <div className="header">
                        Instructors
                    </div>
                    <div className="courseItems">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Hariharan Raj</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                <div className="helpText">Here are the courses offered by this instructor</div>
                                <ol>
                                    <li onClick={redirectToAssignments}>Advanced Cloud Computing</li>
                                    <li>Data Structures and Algorithms</li>
                                    <li>Enterprise Software Design</li>
                                </ol>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Nethra Viswanathan</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstructorStudent;