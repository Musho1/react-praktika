import React from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch } from 'react-redux';
import {useState} from "react";
import {logIn} from "../../Redux/action/LoginAction";
import SignNav from "../navs/SignNav";
import {useSelector} from 'react-redux';
import GooglePasdsword from './googlePasword';
import { forgotPassword, LoginGoogle, singinwhiteGoogle } from '../../Redux/action/googleLoginAction';
function Login(props){
    const { profil } = props;
    const [users,setUser]=useState({Email:"",Password:"",login:false})
    const dispatch = useDispatch()
    const {start}=useSelector(state=>{return(state.profil)})
    const {loginWhiteGoogle}=useSelector(state=>(state.googleLogin))
        return(
            <div className="loginBAck">
                <SignNav />
               <div className="LoginPage">
                {!loginWhiteGoogle?
                    <div className="Login">
                    <p className="text-danger col-md-6">{profil.errorMsg}</p>
                        <p className="text-danger"></p>
                            <div className="form-grup">
                                <label>Email</label>
                                < input className="form-control" onChange={(e)=>setUser({...users,Email:e.target.value})}></input>
                            </div>
                            <div className="from-grup">
                                <label>Password</label>
                                <input className="form-control" onChange={(e)=>setUser({...users,Password:e.target.value})}></input>
                            </div>
                            <br></br>
                            <div className="form-grup">
                                <button className="btn btn-sm btn-success" disabled={start} onClick={()=> dispatch(logIn(users.Email,users.Password))} >
                                    Login 
                                    {start ?<div className="lds-facebook"><div></div><div></div><div></div></div>:<div></div>}
                                </button>
                                <img onClick={()=>dispatch(singinwhiteGoogle())} className="googlebtn" src="https://pics.freeicons.io/uploads/icons/png/37468251556105321-512.png" />
                            </div>
                            <div>
                                <button className="btn btn-sm btn-danger" onClick={()=>dispatch(forgotPassword())}>forgot password</button>
                            </div>
                            <br></br>
                    </div>
                    :<GooglePasdsword />}


               </div> 
        </div>)
}
export default connect(r=>r)(Login)