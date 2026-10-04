import { Link } from "react-router-dom";

function FormPage() {

    return (
        <div className="page">

            <h2>Forms Examples</h2>

            <div className="example-list">

                <Link to="/forms/simple">
                    Simple Form
                </Link>

                <Link to="/forms/registration">
                    Registration Form
                </Link>

                <Link to="/forms/login">
                    Login Form
                </Link>

            </div>

        </div>
    );
}

export default FormPage;