import Header from "../Header/Header";
import React, { useState,useEffect } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function SingleAssignment(){
    const nav = useNavigate()
    const { cId,aId,sId } = useParams();
    const { width, height } = useWindowSize()
    const [confetti,setConfetti] = useState(false);
    const [data,setData] = useState([]);
    const [msg,setMsg] = useState([]);
    const [link,setLink] = useState([]);
    useEffect(async () => {
        const userId = localStorage.getItem('userId');
        console.log("here");
        try {
            const response = await fetch(`http://localhost:8080/students/courses/${cId}/assignments/${aId}/submissions/${sId}/${userId}`,{
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                setData(data);
                console.log(data);
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }, []);
        const handleClick = async(evt) => {
              const userId = localStorage.getItem('userId');
            evt.preventDefault()
            
            await fetch(`http://localhost:8080/students/courses/${cId}/assignments/${aId}/submissions/${sId}/comments/${userId}`,{
            method: 'POST',
    
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
            },
            
            body: JSON.stringify({
                "message": msg,
            }),
            })
            .then(response => {
                if(response.status == 200){
                    
                }else{
                    console.log('error'); 
                }
            })
            .then(data => {
            })
            .catch((err) => {
                
            });
        };
    
        const submitAssignment = async(evt) => {
            const userId = localStorage.getItem('userId');
            console.log("t",link)
          evt.preventDefault()
          
          await fetch(`http://localhost:8080/students/courses/${cId}/assignments/${aId}/submissions/${sId}/${userId}`,{
          method: 'PUT',
  
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json ',
              'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With'
              
          },
          
          body: JSON.stringify({
              "link": link,
          }),
          })
          .then(response => {
              if(response.status == 200){
                  
              }else{
                  console.log('error'); 
              }
          })
          .then(data => {
          })
          .catch((err) => {
              
          });
      };
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
                                    <td className="tableQ">Assignment ID</td>
                                    <td className="tableA">{data.id}</td>
                                </tr>
                                {/* <tr>
                                    <td className="tableQ">Description</td>
                                    <td className="tableA">Create a responsive web page using Angular and SpringBoot</td>
                                </tr> */}
                                <tr>
                                    <td className="tableQ">Status</td>
                                    <td className="tableA">
                                    <div className={`StatusBadge ${data.status == "Not Started" || data.status == "Incomplete" ? "error" : ""} ${data.status == "Submitted" ? "warning" : ""} ${data.status == "Completed" ? "success" : ""}`}></div>{data.status}

                                    </td>
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
                                    <input class="input__field" type="text" placeholder=" " onChange={(e) => setLink(e.target.value)}/>
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
                        {data.comment && data.comment.map((comments) => 
                            <div className={`commentEl ${comments.usertype == "Student" ? "elLeft": "elRight"}`}>
                                <div className="userName">{comments.usertype}</div>
                                <div className="commentBubble">
                                    <div className="currUser">
                                        <div>{comments.message}</div>
                                                    
                                    </div>
                                </div>
                            </div> 
                        )} 
                    </div>
                    <div className="addCommentSection">
                        <form action="" onSubmit={handleClick}>
                            <input type="text" name="comment" id=" " placeholder="Enter your comments" onChange={(e) => setMsg(e.target.value)}/>
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
