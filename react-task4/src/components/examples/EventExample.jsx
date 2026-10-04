function EventExample() {

    const handleClick = () => {

        alert("Button clicked!");

    };


    return (
        <div className="page">

            <h2>Event Handling Example</h2>

            <div className="output-card">

                <button onClick={handleClick}>
                    Click Me
                </button>

            </div>

        </div>
    );
}

export default EventExample;