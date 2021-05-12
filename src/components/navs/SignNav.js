import React from "react";
import {Link} from "react-router-dom";

function SignNav() {
    return(
        <nav className="navbar navbar-expand-sm bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item text-white">
                    <Link className="nav-link text-white" to="/">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/singup">Singup</Link>
                </li>
            </ul>
        </nav>)
}
export default SignNav