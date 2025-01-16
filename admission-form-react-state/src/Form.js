export default function Form({onSubmit , setFirstName,firstName,setLastName,lastName}){
    return (
        <div className="formContainer">
       <section className="form">
        <form onSubmit={onSubmit}>
        <h2>Signup Right Now !</h2>

         <input value={firstName} placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)}/>
         <input value={lastName} placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)} />
         <button type="submit">Add</button>
        </form>
        </section>
        </div>
    )
}