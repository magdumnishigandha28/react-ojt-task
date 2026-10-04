import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Details</h1>

      <div className="student-container">

        <Student
          id="101"
          name="Madhura"
          course="B.Sc Computer Science"
          marks="85%"
        />

        <Student
          id="102"
          name="Sneha"
          course="BCA"
          marks="90%"
        />

        <Student
          id="103"
          name="Priya"
          course="B.Sc IT"
          marks="88%"
        />

      </div>
    </div>
  );
}

export default App;