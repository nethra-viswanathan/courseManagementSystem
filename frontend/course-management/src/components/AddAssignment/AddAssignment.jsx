import InstructorHeader from "../InstructorHeader/InstructorHeader"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
function AddAssignments(){
    const nav = useNavigate()
    const [password,setPassword] = useState("")
    const [name, setName] = useState("");
    const redirectAllCourses = (e) =>{
        e.preventDefault()
        nav('/ViewAssignments')
    }
    const handleClick = (evt) => {
        evt.preventDefault()
        
        fetch(`http://localhost:8080/auth/login/student`,{
        method: 'POST',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ',
        },
        
        body: JSON.stringify({
            "name": name,
            "description": password 
        }),
        })
        .then(response => {
            if(response.status == 200){
                    // navigate("/StudentDashboard")
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
            <div className="InsAddCourseParent">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="text1">Add New Assignment</div>
                        <div className="text2">Create a new assignment that students can submit here</div>
                    </div>
                    <div className="courseItems">
                        <form action="" className="createCourseForm" onSubmit={handleClick}>
                            <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" " />
                                    <span class="input__label">Assingnment Title</span>
                                </label>
                            </div>
                            <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" " />
                                    <span class="input__label">Assignment Description</span>
                                </label>
                            </div>
                            <div className="button-input">
                                <input type="submit" name="" id="" className="submit-login" value="Add Assignment" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAssignments