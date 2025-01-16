
import Student from "./Student";
    const students = [
        {
            id: `${Date.now()}-${Math.floor(Math.random() * 10)}`, // Random ID based on timestamp and random number
            firstName: "John",
           lastName: "Doe",
            isAdmitted: true,
        },
        {
            id: `${Date.now()}-${Math.floor(Math.random() * 10)}`,
            firstName: "Jane",
           lastName: "Smith",
            isAdmitted: false,
        },
        {
            id: `${Date.now()}-${Math.floor(Math.random() * 10)}`,
            firstName: "Alice",
           lastName: "Johnson",
            isAdmitted: true,
        },
        {
            id: `${Date.now()}-${Math.floor(Math.random() * 10)}`,
            firstName: "Bob",
           lastName: "Brown",
            isAdmitted: false,
        },
    ];


export default function StudentList(){
    return (
        <div className="">
           <ul>
              {
                students.map((student)=> 
                <Student student={student} key={student.id} /> 
                )
              }
           </ul>
        </div>
    )
}