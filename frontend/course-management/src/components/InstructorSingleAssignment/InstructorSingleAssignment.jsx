import InstructorHeader from '../InstructorHeader/InstructorHeader';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function InstructorSingleAssignment(){
    const {cId , aId, sId} = useParams()
    const [data,setData] = useState([]);
    const [msg,setMsg] = useState([]);
   useEffect(async () => {
    const userId = localStorage.getItem('userId');
    console.log("here");
    try {
        const response = await fetch(`http://localhost:8080/teachers/courses/${cId}/assignments/${aId}/submissions/${sId}/${userId}`,{
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
        
        await fetch(`http://localhost:8080/teachers/assignments/${aId}/submissions/${sId}/comments/${userId}`,{
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
                // setTimeout(() => {
                    // navigate("/StudentDashboard")
                // }, 5000);
            }else{
                console.log('error'); 
            }
        })
        .then(data => {
        })
        .catch((err) => {
            
        });
    };

    const changeStatus = async(evt) => {
        const userId = localStorage.getItem('userId');
        console.log("test",evt.target.value)
      evt.preventDefault()
      
      await fetch(`http://localhost:8080/teachers/courses/${cId}/assignments/${aId}/submissions/${sId}/${userId}`,{
      method: 'PUT',

      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json ',
      },
      
      body: JSON.stringify({
          "status": evt.target.value,
      }),
      })
      .then(response => {
          if(response.status == 200){
              // setTimeout(() => {
                  // navigate("/StudentDashboard")
              // }, 5000);
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
                                    <td className="tableQ">Submission ID</td>
                                    <td className="tableA">{data.id}</td>
                                </tr>
                                {/* <tr>
                                    <td className="tableQ">Assignment Title</td>
                                    <td className="tableA">Assignment 1</td>
                                </tr> */}
                                {/* <tr>
                                    <td className="tableQ">Assignment Description</td>
                                    <td className="tableA">Create a responsive web page using Angular and SpringBoot</td>
                                </tr> */}
                                <tr>
                                    <td className="tableQ">Status</td>
                                    <td className="tableA">
                                    <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Incomplete" control={<Radio />} label="Incomplete" onChange={changeStatus}/>
                                        <FormControlLabel value="Completed" control={<Radio />} label="Completed" onChange={changeStatus}/>
                                    </RadioGroup>
                                    </FormControl>
                                        {/* <div className={`StatusBadge ${data.status == "Not Started" || data.stus == "Incomplete" ? "error" : ""} ${data.status == "Submitted" ? "warning" : ""} ${data.status == "Completed" ? "success" : ""}`}></div>{data.status} */}
                                    </td>
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
                                    <td className="tableA">{data.link}</td>
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
                    {data.comment && data.comment.map((comments) => 
                        <div className={`commentEl ${comments.usertype == "Student" ? "elRight": "elLeft"}`}>
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
                        <form action=""  onSubmit={handleClick}>
                            <input type="text" name="comment" id=" " placeholder="Enter your comments"  onChange={(e) => setMsg(e.target.value)}/>
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