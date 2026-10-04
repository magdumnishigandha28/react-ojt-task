import { useState } from "react";

function StateExample() {

    const [count, setCount] = useState(0);

    return (
        <div className="page">

            <h2>State Example Output</h2>

            <div className="output-card">

                <h3>Counter: {count}</h3>

                <button
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                >
                    Decrease
                </button>

            </div>

        </div>
    );
}

export default StateExample;