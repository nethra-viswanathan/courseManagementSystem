import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const redirectYourCourses = () => {
        navigate("/StudentDashboard")
    }
    return(
        <>
            <div className="menuParent">
                <div className="logo">Chonks</div>
                <div className="menuItems">
                    <ul>
                        <li onClick={redirectYourCourses}><a href="#">Your Courses</a></li>
                        <li><a href="#">Instructors</a></li>
                        
                    </ul>
                    {/* <span>All Courses</span>
                    <span>Your Courses</span> */}
                </div>
                <div className="signOut">
                    <span class="material-symbols-outlined">logout</span>
                </div>
            </div>
        </>
    )
}

export default Header;