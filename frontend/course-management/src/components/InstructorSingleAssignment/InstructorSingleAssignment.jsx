import InstructorHeader from '../InstructorHeader/InstructorHeader';
import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useNavigate } from "react-router-dom";
function InstructorSingleAssignment(){
    return(
        <>
            <InstructorHeader></InstructorHeader>
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
                                    <td className="tableQ">Sudent Name</td>
                                    <td className="tableA">Nethra Visw</td>
                                </tr>
                                <tr>
                                    <td className="tableQ">Assignment Title</td>
                                    <td className="tableA">Assignment 1</td>
                                </tr>
                                <tr>
                                    <td className="tableQ">Assignment Description</td>
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
                            <div className="text1"> View Assignment</div>
                            <div className="text2">View Assignment Details Here</div>
                        </div>
                        <div className="assignmentDetsTable">
                            <table>
                                <tr>
                                    <td className="tableQ">Submitted Link:</td>
                                    
                                </tr>
                                <tr>
                                    <td className="tableA">Google</td>
                                </tr>
                            </table>
                        </div>
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

export default InstructorSingleAssignment; 