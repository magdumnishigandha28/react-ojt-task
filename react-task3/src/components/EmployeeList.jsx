import { useState } from "react";
import {Button,Card,Form,InputGroup,Table} from "react-bootstrap";

function EmployeeList({
    employees,
    handleEdit,
    deleteEmployee
}) {

    const [search, setSearch] = useState("");


    // Search employee
    const filteredEmployees = employees.filter(
        (employee) => {

            const text = search.toLowerCase();

            return (
                employee.name
                    .toLowerCase()
                    .includes(text) ||

                employee.email
                    .toLowerCase()
                    .includes(text) ||

                employee.department
                    .toLowerCase()
                    .includes(text)
            );

        }
    );


    return (

        <Card className="p-4 shadow-sm">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h4 className="mb-0">
                    Employee List
                </h4>


                <InputGroup className="search-box">

                    <Form.Control
                        type="text"
                        placeholder="Search by name, email or department..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </InputGroup>

            </div>


            {filteredEmployees.length === 0 ? (

                <p>
                    No employees found.
                </p>

            ) : (

                <Table
                    bordered
                    hover
                    responsive
                    className="employee-table"
                >

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Joining Date</th>
                            <th>Gender</th>
                            <th>Experience</th>
                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredEmployees.map(
                            (employee) => (

                                <tr key={employee.id}>

                                    <td>
                                        {employee.id}
                                    </td>

                                    <td>
                                        {employee.name}
                                    </td>

                                    <td>
                                        {employee.email}
                                    </td>

                                    <td>
                                        {employee.phone}
                                    </td>

                                    <td>
                                        {employee.department}
                                    </td>

                                    <td>
                                        {employee.designation}
                                    </td>

                                    <td>
                                        {employee.joiningDate}
                                    </td>

                                    <td>
                                        {employee.gender}
                                    </td>

                                    <td>
                                        {employee.experience}
                                    </td>

                                    <td>

                                        <Button
                                            size="sm"
                                            variant="primary"
                                            className="me-2"
                                            onClick={() =>
                                                handleEdit(employee)
                                            }
                                        >
                                            Edit
                                        </Button>


                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                deleteEmployee(
                                                    employee.id
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </Table>

            )}

        </Card>
    );
}

export default EmployeeList;