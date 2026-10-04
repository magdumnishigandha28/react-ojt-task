import "./Student.css";

function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Card</h2>

      <p><b>ID:</b> {props.id}</p>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

export default Student;