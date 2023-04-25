import InstructorHeader from "../InstructorHeader/InstructorHeader"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
function AddAssignments(){
    const nav = useNavigate()
    const [desc,setDesc] = useState("")
    const [name, setName] = useState("");
    const { id } = useParams();
    console.log("id",id)
    const redirectAllCourses = (e) =>{
        e.preventDefault()
        nav('/ViewAssignments')
    }
    const handleClick = (evt) => {
        if(name != "" && desc != ""){
            evt.preventDefault()
        
            fetch(`http://localhost:8080/teachers/courses/createAssignments/${id}`,{
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json ',
            },
            
            body: JSON.stringify({
                "name": name,
                "description": desc 
            }),
            })
            .then(response => {
                if(response.status == 200 || response.status == 201){
                        nav(`/ViewAssignments/${id}`)
                }else{
                    console.log('error'); 
                    
                }
            })
            .then(data => {
                
            })
            .catch((err) => {
                
            });
        }   
        
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
                                    <input class="input__field" type="text" placeholder=" "  onChange={(e) => setName(e.target.value)}/>
                                    <span class="input__label">Assingnment Title</span>
                                </label>
                            </div>
                            <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" "  onChange={(e) => setDesc(e.target.value)}/>
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