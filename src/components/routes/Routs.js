import React, { useEffect, useState } from "react";
import Login from '../loginSignUp/Login';
import Singup from "../loginSignUp/Singup";
import Profile from '../loginSignUp/Profile';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import Photos from "../Photos/photos";
import Setting from "../setting/setting";
import UserPage from "../userpage/userPage";
import UserPhotos from "../userpage/userPhotos";
import UserPagePhoto from "../userpage/UserPagePhoto";

function Routs(){
    const {isActive}=useSelector(state=>{return(state.user.userAuth)})
    const PrivateRoute=(props) => {
        if(isActive && props.path=="/photos"){
            return(<Route path={props.path} component={props.component} />)
        }
        else if(isActive && props.path=="/profile"){
            return(<Route path={props.path} component={props.component} />)
        }
        // else if(isActive && props.path=="/setting"){
        //     return(<Route path={props.path} component={props.component} />)
        // }
        
        else {
            return <Redirect  to="/"/>
        }
    }
 return (
    <BrowserRouter>
        <Switch>
                <Route path="/user/:uid/photo" component={UserPagePhoto}/>
                <Route path="/user/:uid" component={UserPage}/>
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/photos" component={Photos} />
                <Route path="/settings" component={Profile} />
                <Route path="/singup" component={Singup} />
                <Route path="/" component={Login} >
                    {isActive && <Redirect  to="/profile"/>}
                </Route>
                
        </Switch>
    </BrowserRouter>
    )
}
export default Routs