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
     
  return (
    <div className="App">
     <Header/>
     <Form  onAddStudent={handleAddStudents} 
     />
     <h2 style={{marginLeft:'35%'}}>Student List</h2>

        <StudentList students={students}/>
     <Footer/>
     
    </div>
  );
}

export default App;
