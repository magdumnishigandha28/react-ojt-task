import { Link } from "react-router-dom";

function ComponentPage() {

    return (
        <div className="page">

            <h2>Components Examples</h2>

            <div className="example-list">

                <Link to="/components/props">
                    Props Example
                </Link>

                <Link to="/components/state">
                    State Example
                </Link>

                <Link to="/components/events">
                    Event Handling Example
                </Link>

            </div>

        </div>
    );
}

export default ComponentPage;