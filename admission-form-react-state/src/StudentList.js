import Student from "./Student";
export default function StudentList({ students , onDeleteStudent ,onToggleStudent}) {
    return (
      <div>
        <ul>
          {students.map((student, index) => (
            <Student student={student} key={student.id} index={index} onDeleteStudent={onDeleteStudent} onToggleStudent={onToggleStudent} />
          ))}
        </ul>
      </div>
    );
  }