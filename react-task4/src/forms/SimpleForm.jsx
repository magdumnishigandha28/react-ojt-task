import { useState } from "react";

function SimpleForm() {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert(`Hello ${name}`);

    };


    return (
        <div className="page">

            <h2>Simple Form</h2>

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

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default SimpleForm;