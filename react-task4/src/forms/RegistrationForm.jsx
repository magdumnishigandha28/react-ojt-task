import { useState } from "react";

function RegistrationForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert(
            `Name: ${name}\nEmail: ${email}`
        );

    };


    return (
        <div className="page">

            <h2>Registration Form</h2>

            <div className="output-card">

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <br /><br />

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <br /><br />

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>

        </div>
    );
}

export default RegistrationForm;