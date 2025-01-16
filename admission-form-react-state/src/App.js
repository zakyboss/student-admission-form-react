import Header from "./Header";
import Footer from "./Footer";
import StudentList from "./StudentList";
import Form from "./Form";
import { useState } from "react";
function App() {
   const [firstName,setFirstName]= useState('');
      const [lastName,setLastName]= useState('');
      const[students,setStudent]=useState([])

      function handleSubmit(e) {
        e.preventDefault();
        if (firstName && lastName) {
          const newId = `${Date.now()}${Math.floor(Math.random() * 10)}`;
          const newStudent = {
            firstName, 
            lastName, 
            id: newId, 
            isAdmitted: false,
          };
          console.log(newStudent);
          setStudent((prevStudents) => [...prevStudents, newStudent]);
          setFirstName('');
          setLastName('');
        } else {
          return;
        }
      }
  return (
    <div className="App">
     <Header/>
     <Form  onSubmit={handleSubmit} firstName={firstName}  
     setFirstName={setFirstName}
     lastName={lastName}
        setLastName={setLastName}
     />
     <h2 style={{marginLeft:'35%'}}>Student List</h2>

        <StudentList students={students}/>
     <Footer/>
     
    </div>
  );
}

export default App;
