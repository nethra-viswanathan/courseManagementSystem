import { useParams,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import InstructorHeader from "../InstructorHeader/InstructorHeader"
function ViewStudentsInCourse(){
    const {cId , aId} = useParams()
    const [students,setStudents] = useState([]);
    useEffect(() => {
          const userId = localStorage.getItem('userId');
        fetch(`http://localhost:8080/teachers/courses/${cId}/assignments/${aId}/submissions/${userId}`,{
        method: 'GET',

        })
        .then(response => response.json())
        .then(data => {
            setStudents(data)
            console.log(data)
        });
    },[])
    return(
        <>
            <InstructorHeader></InstructorHeader>
            <div className="InsViewStudParent">
                <div className="courseItemsSection">
                    <div className="header">
                        <div className="text1">View students</div>
                        <div className="text2">Create students who have submitted the assignment</div>
                    </div>
                    <div className="courseItems">
                        <div className="assignmentDetsTable">
                                <table>
                                   <tbody>
                                   { students.map((stud) => 
                                    <tr>
                                        <td className="tableQ"><Link  style={{ textDecoration: 'none', color: 'inherit' }} to={`/ViewSubmission/${cId}/${aId}/${stud.id}`}>{stud.email}</Link></td>
                                        <td className="tableA"><div className={`StatusBadge ${stud.status == "Not Started" || stud.stus == "Incomplete" ? "error" : ""} ${stud.status == "Submitted" ? "warning" : ""} ${stud.status == "Completed" ? "success" : ""}`}></div> {stud.status}</td>
                                    </tr>
                                   )}
                                   </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default ViewStudentsInCourse;