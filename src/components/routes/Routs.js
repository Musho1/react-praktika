import React from "react";
import Login from '../loginSignUp/Login';
import Singup from "../loginSignUp/Singup";
import Profile from '../loginSignUp/Profile';
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import Photos from "../Photos/photos";
import UserPage from "../userpage/userPage";
import UserPagePhoto from "../userpage/UserPagePhoto";
import Subscribe from "../subscribe/subscribe";
import Friends from "../friends/friends";
import firebase from 'firebase'

function Routs(){
    const {isActive}=useSelector(state=>{return(state.user.userAuth)})
    const PrivateRoute=(props) => {
        if(isActive && props.path==="/photos"){
            return(<Route path={props.path} component={props.component} />)
        }
        else if(isActive && props.path==="/profile"){
            return(<Route path={props.path} component={props.component} />)
        }
        else {
            return <Redirect  to="/"/>
        }
    }
 return (
    <BrowserRouter>
        <Switch>
                <Route path="/user/:uid/photo" component={UserPagePhoto}/>
                <Route path="/user/:uid" component={UserPage}/>
                <PrivateRoute path="/profile" component={Subscribe} />
                <Route path="/photos" component={Photos} />
                <Route path="/settings" component={Profile} />
                <Route path="/friends" component={Friends} />
                <Route path="/singup" component={Singup} />
                <Route path="/" component={Login} >
                    {isActive && firebase.auth().currentUser.emailVerified &&                     
                    <Redirect  to="/profile"/>}
                </Route>
                
        </Switch>
    </BrowserRouter>
    )
}
export default Routs