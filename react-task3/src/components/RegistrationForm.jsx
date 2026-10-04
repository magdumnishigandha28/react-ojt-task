import { useEffect, useState } from "react";
import { Alert,Button,Card,Col,Form,Row} from "react-bootstrap";

function RegistrationForm({
    addEmployee,
    updateEmployee,
    editEmployee,
    cancelEdit
}) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        joiningDate: "",
        gender: "",
        experience: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // When Edit button is clicked
    useEffect(() => {

        if (editEmployee) {

            setForm({
                name: editEmployee.name,
                email: editEmployee.email,
                phone: editEmployee.phone,
                department: editEmployee.department,
                designation: editEmployee.designation,
                joiningDate: editEmployee.joiningDate,
                gender: editEmployee.gender,
                experience: editEmployee.experience
            });

        }

    }, [editEmployee]);


    // Handle input change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    };


    // Form validation
    const validateForm = () => {

        if (!form.name.trim()) {
            return "Name is required";
        }

        if (!form.email.trim()) {
            return "Valid email is required";
        }

        if (!form.email.includes("@")) {
            return "Enter a valid email";
        }

        if (!form.phone.trim()) {
            return "Phone number is required";
        }

        if (!/^[0-9]{10}$/.test(form.phone)) {
            return "Phone number must be 10 digits";
        }

        if (!form.department) {
            return "Department is required";
        }

        if (!form.designation) {
            return "Designation is required";
        }

        if (!form.joiningDate) {
            return "Joining date is required";
        }

        if (!form.gender) {
            return "Please select gender";
        }

        if (!form.experience) {
            return "Experience is required";
        }

        return "";
    };


    // Submit form
    const handleSubmit = (e) => {

        e.preventDefault();

        const validationError = validateForm();

        if (validationError) {

            setError(validationError);
            setSuccess("");

            return;
        }

        setError("");


        // Update existing employee
        if (editEmployee) {

            updateEmployee({
                ...editEmployee,
                ...form
            });

            setSuccess(
                "Employee Updated Successfully!"
            );

        }

        // Add new employee
        else {

            addEmployee(form);

            setSuccess(
                "Employee Registered Successfully!"
            );

        }


        // Clear form
        setForm({
            name: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            joiningDate: "",
            gender: "",
            experience: ""
        });


        setTimeout(() => {
            setSuccess("");
        }, 2000);

    };


    // Clear button
    const handleClear = () => {

        setForm({
            name: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            joiningDate: "",
            gender: "",
            experience: ""
        });

        setError("");
        setSuccess("");

        if (editEmployee) {
            cancelEdit();
        }
    };


    return (

        <Card className="p-4 mb-4 shadow-sm">

            <h3 className="mb-4">
                Employee Registration
            </h3>


            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}


            {success && (
                <Alert variant="success">
                    {success}
                </Alert>
            )}


            <Form onSubmit={handleSubmit}>

                <Row>

                    {/* Full Name */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Full Name *
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter full name"
                            />

                        </Form.Group>

                    </Col>


                    {/* Email */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Email Address *
                            </Form.Label>

                            <Form.Control
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                            />

                        </Form.Group>

                    </Col>


                    {/* Phone */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Phone Number *
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Enter 10 digit phone number"
                            />

                        </Form.Group>

                    </Col>

                </Row>


                <Row>

                    {/* Department */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Department *
                            </Form.Label>

                            <Form.Select
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select department
                                </option>

                                <option value="IT">
                                    IT
                                </option>

                                <option value="HR">
                                    HR
                                </option>

                                <option value="Finance">
                                    Finance
                                </option>

                                <option value="Marketing">
                                    Marketing
                                </option>

                            </Form.Select>

                        </Form.Group>

                    </Col>


                    {/* Designation */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Designation *
                            </Form.Label>

                            <Form.Select
                                name="designation"
                                value={form.designation}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select designation
                                </option>

                                <option value="Software Engineer">
                                    Software Engineer
                                </option>

                                <option value="HR Manager">
                                    HR Manager
                                </option>

                                <option value="Analyst">
                                    Analyst
                                </option>

                                <option value="Executive">
                                    Executive
                                </option>

                            </Form.Select>

                        </Form.Group>

                    </Col>


                    {/* Joining Date */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Joining Date *
                            </Form.Label>

                            <Form.Control
                                type="date"
                                name="joiningDate"
                                value={form.joiningDate}
                                onChange={handleChange}
                            />

                        </Form.Group>

                    </Col>

                </Row>


                <Row>

                    {/* Gender */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Gender *
                            </Form.Label>

                            <div>

                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    value="Male"
                                    checked={
                                        form.gender === "Male"
                                    }
                                    onChange={handleChange}
                                />

                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    value="Female"
                                    checked={
                                        form.gender === "Female"
                                    }
                                    onChange={handleChange}
                                />

                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Other"
                                    name="gender"
                                    value="Other"
                                    checked={
                                        form.gender === "Other"
                                    }
                                    onChange={handleChange}
                                />

                            </div>

                        </Form.Group>

                    </Col>


                    {/* Experience */}

                    <Col md={4}>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Experience (Years) *
                            </Form.Label>

                            <Form.Select
                                name="experience"
                                value={form.experience}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select experience
                                </option>

                                <option value="0-2">
                                    0-2
                                </option>

                                <option value="2-3">
                                    2-3
                                </option>

                                <option value="3-5">
                                    3-5
                                </option>

                                <option value="5-10">
                                    5-10
                                </option>

                                <option value="10+">
                                    10+
                                </option>

                            </Form.Select>

                        </Form.Group>

                    </Col>

                </Row>


                <Button
                    type="submit"
                    variant="primary"
                    className="me-2"
                >

                    {editEmployee
                        ? "UPDATE EMPLOYEE"
                        : "REGISTER EMPLOYEE"}

                </Button>


                <Button
                    type="button"
                    variant="secondary"
                    onClick={handleClear}
                >

                    Clear

                </Button>

            </Form>

        </Card>
    );
}

export default RegistrationForm;