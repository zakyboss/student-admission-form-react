export default function Student({ student, index , onDeleteStudent, onToggleStudent}) {
    const { firstName, lastName, isAdmitted, id } = student;
    return (
      <div className="student">
        <li
          style={isAdmitted ? { textDecoration: 'line-through' } : {}}
          className="studentList"
        >
        <input type='checkbox' value={isAdmitted} onChange={()=>onToggleStudent(student.id)} />
          {typeof id === 'string' ? id.split('-')[0] : Math.trunc(+id, 4)}{' '}
          <em>
            {firstName} {lastName}
          </em>
          <span onClick={()=>onDeleteStudent(id)}  className="deleteBtn">❌</span>
        </li>
      </div>
    );
  }