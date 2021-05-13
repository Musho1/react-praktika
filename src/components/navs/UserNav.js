import React from "react";
import {Link} from "react-router-dom";
import "./UserNav.scss" 
function UserNav(props) {
    return(
        <nav className="navbar navbar-expand-sm bg-white navBorder">
            <ul className="navbar-nav">
                <li className="nav-item text-white">
                    <Link className="nav-link text-dark" to="#">User page</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to={`/userPhoto/${props.uid}`}>Photos</Link>
                    
                </li>
            </ul>
        </nav>)
}
export default UserNav