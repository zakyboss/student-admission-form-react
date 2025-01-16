export default function Student({ student, index }) {
    const { firstName, lastName, isAdmitted, id } = student;
    return (
      <div className="student">
        <li
          style={isAdmitted ? { textDecoration: 'line-through' } : {}}
          className="studentList"
        >
          {typeof id === 'string' ? id.split('-')[0] : Math.trunc(+id, 4)}{' '}
          <em>
            {firstName} {lastName}
          </em>
          <span>❌</span>
        </li>
      </div>
    );
  }