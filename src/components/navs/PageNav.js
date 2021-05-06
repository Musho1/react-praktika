import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {useDispatch } from 'react-redux';
import {LogOut } from "../../Redux/action/LoginAction";
import { getUserData } from "../../Redux/action/userAction";
import {useSelector} from 'react-redux'
function PageNav(props){
    const { uid, isRequesting } = useSelector(state => (state.user.userAuth))
    const dispatch=useDispatch();
    
    // useEffect(() => {
    //     if (uid) {
    //         dispatch(getUserData(uid));
    //     }
    // }, [])

	return(
        <nav className="navbar navbar-expand-sm  profil-navs bg-dark">
            <ul className="navbar-nav px-4" >
                <li className="nav-item">
                    <Link className="nav-link text-white text-right " to="/profile">Page</Link>
                </li>
            </ul>
            <ul className="navbar-nav px-4" >
                <li className="nav-item">
                    <Link className="nav-link text-white text-right " to="/singout" onClick={()=>dispatch(LogOut())}>sign out</Link>
                </li>
            </ul>
        </nav>
    )
}
export default PageNav
