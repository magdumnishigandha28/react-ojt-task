import { useEffect, useState } from "react";

function UseEffectExample() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Component updated");

    }, [count]);


    return (
        <div className="page">

            <h2>useEffect Example</h2>

            <div className="output-card">

                <h3>
                    Count: {count}
                </h3>

                <button
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </button>

            </div>

        </div>
    );
}

export default UseEffectExample;