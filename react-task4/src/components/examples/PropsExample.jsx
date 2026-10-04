function PropsExample() {

    const Student = ({ name, course }) => {

        return (
            <div className="output-card">

                <h3>Student Details</h3>

                <p>
                    Name: {name}
                </p>

                <p>
                    Course: {course}
                </p>

            </div>
        );
    };


    return (
        <div className="page">

            <h2>Props Example Output</h2>

            <Student
                name="Madhura"
                course="B.Sc Computer Science"
            />

        </div>
    );
}

export default PropsExample;