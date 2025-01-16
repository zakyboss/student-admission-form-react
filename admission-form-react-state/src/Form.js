import { useState } from "react";
export default function Form({onAddStudent}){
    
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName]= useState('');
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
          onAddStudent(newStudent)
          console.log(newStudent);
          setFirstName('');
          setLastName('');
        } else {
          return;
        }
      }
    return (
        <div className="formContainer">
       <section className="form">
        <form onSubmit={handleSubmit}>
        <h2>Signup Right Now !</h2>

         <input value={firstName} placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)}/>
         <input value={lastName} placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)} />
         <button type="submit">Add</button>
        </form>
        </section>
        </div>
    )
}