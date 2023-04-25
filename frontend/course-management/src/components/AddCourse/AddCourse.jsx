import InstructorHeader from "../InstructorHeader/InstructorHeader"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
function AddCourse(){
    const nav = useNavigate()
    const [name,setName] = useState("");
    const handleClick = (evt) => {
        evt.preventDefault()
        const userId = localStorage.getItem('userId');
        fetch(`http://localhost:8080/teachers/courses/${userId}`,{
        method: 'POST',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ',
        },
        
        body: JSON.stringify({
            "name": name,
        }),
        })
        .then(response => {
            if(response.status == 200 || response.status == 201){

                    nav("/InstructorDashboard")
             
            }else{
                console.log('error'); 
                // setShowMsg("Unable to login. Please try again")
            }
        })
        .then(data => {
            
        })
        .catch((err) => {
            
        });
    };
    const redirectAllCourses = (e) =>{
        e.preventDefault()
        nav('/InstructorDashboard')
    }
    return(
        <>
            <InstructorHeader></InstructorHeader>
            <div className="InsAddCourseParent">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="text1">Add New Course</div>
                        <div className="text2">Create a new course that students can view here</div>
                    </div>
                    <div className="courseItems">
                        <form action="" className="createCourseForm" onSubmit={handleClick}>
                            <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" " onChange={(e) => setName(e.target.value)}/>
                                    <span class="input__label">Course Title</span>
                                </label>
                            </div>
                            {/* <div className="text-input"> 
                                <label class="input">
                                    <input class="input__field" type="text" placeholder=" " />
                                    <span class="input__label">Course Description</span>
                                </label>
                            </div> */}
                            <div className="button-input">
                                <input type="submit" name="" id="" className="submit-login" value="Add Course" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCourse