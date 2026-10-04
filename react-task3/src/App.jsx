import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@company.com",
            phone: "9876543210",
            department: "IT",
            designation: "Software Engineer",
            joiningDate: "2023-06-15",
            gender: "Male",
            experience: "3-5"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@company.com",
            phone: "8765432109",
            department: "HR",
            designation: "HR Manager",
            joiningDate: "2022-11-20",
            gender: "Female",
            experience: "5-10"
        },
        {
            id: 3,
            name: "Rahul Kumar",
            email: "rahul.kumar@company.com",
            phone: "7654321098",
            department: "Finance",
            designation: "Analyst",
            joiningDate: "2023-02-10",
            gender: "Male",
            experience: "0-2"
        },
        {
            id: 4,
            name: "Priya Sharma",
            email: "priya.sharma@company.com",
            phone: "6543210987",
            department: "Marketing",
            designation: "Executive",
            joiningDate: "2023-08-01",
            gender: "Female",
            experience: "2-3"
        }
    ]);

    const [editEmployee, setEditEmployee] = useState(null);

    // Add employee
    const addEmployee = (employee) => {

        const newEmployee = {
            ...employee,
            id: employees.length > 0
                ? Math.max(...employees.map(emp => emp.id)) + 1
                : 1
        };

        setEmployees(prev => [...prev, newEmployee]);
    };


    // Update employee
    const updateEmployee = (employee) => {

        setEmployees(prev =>
            prev.map(emp =>
                emp.id === employee.id
                    ? employee
                    : emp
            )
        );

        setEditEmployee(null);
    };


    // Delete employee
    const deleteEmployee = (id) => {

        setEmployees(prev =>
            prev.filter(emp => emp.id !== id)
        );
    };


    // Edit employee
    const handleEdit = (employee) => {

        setEditEmployee(employee);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <div className="container-fluid p-4">

            <RegistrationForm
                addEmployee={addEmployee}
                updateEmployee={updateEmployee}
                editEmployee={editEmployee}
                cancelEdit={() => setEditEmployee(null)}
            />

            <EmployeeList
                employees={employees}
                handleEdit={handleEdit}
                deleteEmployee={deleteEmployee}
            />

        </div>
    );
}

export default App;