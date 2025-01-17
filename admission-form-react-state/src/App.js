import Header from "./Header";
import Footer from "./Footer";
import StudentList from "./StudentList";
import Form from "./Form";
import { useState } from "react";
function App() {
      const[students,setStudent]=useState([])
 function handleAddStudents(students){
           setStudent((student)=> [...student,students])
 }
 function handleDeleteStudent(id){
setStudent((student)=> student.filter(student => student.id!==id))
 }
 
 function handleToggleStudent(id){
  setStudent(students=> students.map(student=> student.id===id? {...student,isAdmitted :!student.isAdmitted}:student))
 }
     
  return (
    <div className="App">
     <Header/>
     <Form  onAddStudent={handleAddStudents} 
     />
     <h2 style={{marginLeft:'35%'}}>Student List</h2>
    {
students.length < 1 ? <h3 style={{marginLeft:'25%',padding:'30px', backgroundColor:'gray', marginRight:'300px', display:'flex',justifyContent:'center'}}>Such Empty 😞</h3> : (        <StudentList students={students}  onDeleteStudent={handleDeleteStudent} onToggleStudent={handleToggleStudent}/>
)
    }
     <Footer/>
     
    </div>
  );
}

export default App;
