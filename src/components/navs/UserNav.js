import React from "react";
import {Link} from "react-router-dom";
import "./UserNav.scss" ;
import { useParams } from 'react-router-dom';
function UserNav(props) {
    const params = useParams();
    const { uid } = params;
    return(
        <nav className="navbar navbar-expand-sm bg-white navBorder">
            <ul className="navbar-nav">
                <li className="nav-item text-white">
                    <Link className="nav-link text-dark" to="#">User page</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to={`/user/${uid}/photo`}>Photos</Link>
                </li>
            </ul>
        </nav>)
}
export default UserNav