import { Routes, Route, Link } from "react-router-dom";

import ComponentPage from "./components/ComponentPage";
import HookPage from "./components/HookPage";
import FormPage from "./components/FormPage";

import PropsExample from "./components/examples/PropsExample";
import StateExample from "./components/examples/StateExample";
import EventExample from "./components/examples/EventExample";

import UseStateExample from "./hooks/UseStateExample";
import UseEffectExample from "./hooks/UseEffectExample";
import UseRefExample from "./hooks/UseRefExample";

import SimpleForm from "./forms/SimpleForm";
import RegistrationForm from "./forms/RegistrationForm";
import LoginForm from "./forms/LoginForm";

import "./App.css";

function App() {

    return (
        <div>

            {/* Navigation */}

            <nav className="navbar">

                <div className="logo">
                    React Programs
                </div>

                <Link to="/components">
                    Components
                </Link>

                <Link to="/hooks">
                    Hooks
                </Link>

                <Link to="/forms">
                    Forms
                </Link>

            </nav>


            {/* Routes */}

            <Routes>

                {/* Main pages */}

                <Route
                    path="/components"
                    element={<ComponentPage />}
                />

                <Route
                    path="/hooks"
                    element={<HookPage />}
                />

                <Route
                    path="/forms"
                    element={<FormPage />}
                />


                {/* Component examples */}

                <Route
                    path="/components/props"
                    element={<PropsExample />}
                />

                <Route
                    path="/components/state"
                    element={<StateExample />}
                />

                <Route
                    path="/components/events"
                    element={<EventExample />}
                />


                {/* Hook examples */}

                <Route
                    path="/hooks/use-state"
                    element={<UseStateExample />}
                />

                <Route
                    path="/hooks/use-effect"
                    element={<UseEffectExample />}
                />

                <Route
                    path="/hooks/use-ref"
                    element={<UseRefExample />}
                />


                {/* Form examples */}

                <Route
                    path="/forms/simple"
                    element={<SimpleForm />}
                />

                <Route
                    path="/forms/registration"
                    element={<RegistrationForm />}
                />

                <Route
                    path="/forms/login"
                    element={<LoginForm />}
                />

            </Routes>

        </div>
    );
}

export default App;