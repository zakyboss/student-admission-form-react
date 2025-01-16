
export default function Student({student}){
     const {firstName,lastName,isAdmitted,id}=student;
//    console.log(student)
    return (
        <div className="student">
         <li style={isAdmitted?{textDecoration:'line-through'}:{}} className="studentList">{typeof id === "string" 
    ? id.split("-")[0]: Math.trunc((+id),4)} <em>{firstName} {lastName} </em>
          <span>❌</span>
         </li>
        </div>
    )
}