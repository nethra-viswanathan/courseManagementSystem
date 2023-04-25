import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const redirectYourCourses = () => {
        navigate("/StudentDashboard")
    }

    const redirectToInstructor = () => {
        navigate("/InstructorBasedCourses")
    }

    const handleClick = (evt) => {
        evt.preventDefault()
        
        fetch(`http://localhost:8080/auth/logout`,{
        method: 'POST',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ',
        },
        
        body: JSON.stringify({
            
        }),
        })
        .then(response => {
            if(response.status == 200){
                    navigate("/Signin")
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
    
    return(
        <>
            <div className="menuParent">
                <div className="logo">Chonks</div>
                <div className="menuItems">
                    <ul>
                        <li onClick={redirectYourCourses}><span>Your Courses</span></li>
                        <li onClick={redirectToInstructor}><span>Instructors</span></li>
                        
                    </ul>
                    {/* <span>All Courses</span>
                    <span>Your Courses</span> */}
                </div>
                <div className="signOut" onClick={handleClick}>
                    <span class="material-symbols-outlined">logout</span>
                </div>
            </div>
        </>
    )
}

export default Header;