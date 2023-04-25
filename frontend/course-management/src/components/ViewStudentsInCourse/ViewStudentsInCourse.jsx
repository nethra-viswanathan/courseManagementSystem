import InstructorHeader from "../InstructorHeader/InstructorHeader"
function ViewStudentsInCourse(){
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
                                    <tr>
                                        <td className="tableQ">Nethra Viswanathan</td>
                                        <td className="tableA"><div className="StatusBadge success"></div> Submitted</td>
                                    </tr>
                                    <tr>
                                        <td className="tableQ">Nethra Viswanathan</td>
                                        <td className="tableA"><div className="StatusBadge success"></div> Submitted</td>
                                    </tr><tr>
                                        <td className="tableQ">Nethra Viswanathan</td>
                                        <td className="tableA"><div className="StatusBadge success"></div> Submitted</td>
                                    </tr>
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