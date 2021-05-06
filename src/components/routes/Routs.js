import React, { useEffect, useState } from "react";
import Login from '../loginSignUp/Login';
import Singup from "../loginSignUp/Singup";
import Profile from '../loginSignUp/Profile';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
function Routs(){
    const {isActive}=useSelector(state=>{return(state.user.userAuth)})
    const PrivateRoute=(props) => {
        if(isActive){
            console.log(isActive+"ssssssssssssss")
            return(<Route path={props.path} component={props.component} />)
        }
        else {
            return(
            <Route>
                <Redirect  to="/"/>
            </Route>)
        }
    }
 return (
    <BrowserRouter>
        <Switch>
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/singup" component={Singup} ></Route>
                <Route path="/" component={Login} >
                    {isActive && <Redirect  to="/profile"/>}
                </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default Routs