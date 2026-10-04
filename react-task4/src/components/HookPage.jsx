import { Link } from "react-router-dom";

function HookPage() {

    return (
        <div className="page">

            <h2>Hooks Examples</h2>

            <div className="example-list">

                <Link to="/hooks/use-state">
                    useState Example
                </Link>

                <Link to="/hooks/use-effect">
                    useEffect Example
                </Link>

                <Link to="/hooks/use-ref">
                    useRef Example
                </Link>

            </div>

        </div>
    );
}

export default HookPage;