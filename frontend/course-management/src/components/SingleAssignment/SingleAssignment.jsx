import Header from "../Header/Header";
import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import { useNavigate } from "react-router-dom";
function SingleAssignment(){
    const nav = useNavigate()
    const { width, height } = useWindowSize()
    const [confetti,setConfetti] = useState(false);
    const submitAssignment = (e) =>{
        e.preventDefault();
        setConfetti(true)
        setTimeout(() => {
            setConfetti(false)
            // nav('/StudentDashboard');
        }, 10000);
    }
    return(
        <>
            {confetti && <Confetti width={width} height={height}/>}
            <Header></Header>
            <div className="assignmentParent">
                <div className="assignmentDetsSubmit">
                    <div className="assDets">
                        <div className="header">
                            <div className="text1">Assignment Details</div>
                            <div className="text2">View Assignment Details Here</div>
                        </div>
                        <div className="assignmentDetsTable">
                            <table>
                                <tr>
                                    <td className="tableQ">Name</td>
                                    <td className="tableA">Assignment 1</td>
                                </tr>
                                <tr>
                                    <td className="tableQ">Description</td>
                                    <td className="tableA">Create a responsive web page using Angular and SpringBoot</td>
                                </tr>
                                <tr>
                                    <td className="tableQ">Status</td>
                                    <td className="tableA"><div className="StatusBadge"></div> Not Started</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="assSubmit">
                        <div className="header">
                            <div className="text1"> Submit Assignment</div>
                            <div className="text2">Enter Assignment Details Here</div>
                        </div>
                        <form action="" onSubmit={submitAssignment}>
                            <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" " />
                                    <span class="input__label">Link</span>
                                </label>
                            </div>
                            <div className="button-input">
                                <input type="submit" name="" id="" className="submit-login" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="assignmentComment">
                    <div className="header">
                        <div className="text1">Comments</div>
                        <div className="text2">Use this section to address any concerns you might have with your submission</div>
                    </div>
                    <div className="body">
                        <div className="commentEl elRight">
                            <div className="userName">Chonks</div>
                            <div className="commentBubble">
                                <div className="currUser">
                                     <div>Rando Comment</div>
                                                
                                </div>
                                <div className="time">Apr 15 9:15PM</div>
                            </div>
                        </div> 
                                    
                        <div className="commentEl elLeft">
                            <div className="userName">user who</div>
                            <div className="commentBubble">
                                chonks commeny
                                <div className="time">Apr 16 04:30AM</div>
                            </div>
                        </div>

                        <div className="commentEl elRight">
                            <div className="userName">Chonks</div>
                            <div className="commentBubble">
                                <div className="currUser">
                                     <div>Rando Comment</div>
                                                
                                </div>
                                <div className="time">Apr 15 9:15PM</div>
                            </div>
                        </div> 
                                    
                        <div className="commentEl elLeft">
                            <div className="userName">user who</div>
                            <div className="commentBubble">
                                chonks commeny
                                <div className="time">Apr 16 04:30AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="addCommentSection">
                        <form action="">
                            <input type="text" name="comment" id=" " placeholder="Enter your comments" />
                                    {/* send comment button */}
                                <button type="submit" className="submitComment" >
                                    <span class="material-symbols-outlined">send</span>
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleAssignment;
