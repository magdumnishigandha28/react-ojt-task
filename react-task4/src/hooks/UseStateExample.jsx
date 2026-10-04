import { useState } from "react";

function UseStateExample() {

    const [name, setName] = useState("");

    return (
        <div className="page">

            <h2>useState Example</h2>

            <div className="output-card">

                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <h3>
                    Hello {name}
                </h3>

            </div>

        </div>
    );
}

export default UseStateExample;