import { useRef } from "react";

function UseRefExample() {

    const inputRef = useRef();

    const handleFocus = () => {

        inputRef.current.focus();

    };


    return (
        <div className="page">

            <h2>useRef Example</h2>

            <div className="output-card">

                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter something"
                />

                <button onClick={handleFocus}>
                    Focus Input
                </button>

            </div>

        </div>
    );
}

export default UseRefExample;