import React, { useEffect, useState } from "react";
import Login from '../loginSignUp/Login';
import Singup from "../loginSignUp/Singup";
import Profile from '../loginSignUp/Profile';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import Photos from "../Photos/photos";
function Routs(){
    const {isActive}=useSelector(state=>{return(state.user.userAuth)})
    const PrivateRoute=(props) => {
        if(isActive && props.path=="/photos"){
           
            return(<Route path={props.path} component={props.component} />)
        }
        else if(isActive && props.path=="/profile"){
            return(<Route path={props.path} component={props.component} />)
        }
        else {
            return <Redirect  to="/"/>
        }
    }
 return (
    <BrowserRouter>
        <Switch>
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/photos" component={Photos} />
                <Route path="/singup" component={Singup} ></Route>
                <Route path="/" component={Login} >
                    {isActive && <Redirect  to="/profile"/>}
                </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default Routs