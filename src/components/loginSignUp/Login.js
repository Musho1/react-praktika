import {connect, useDispatch } from 'react-redux';
import {useState} from "react";
import {logIn} from "../../Redux/action/LoginAction";
import SignNav from "../navs/SignNav";
import { useHistory } from "react-router-dom"
import {useSelector} from 'react-redux'
function Login(props){
    const [users,setUser]=useState({Email:"",Password:"",login:false,photo:""})
    const history = useHistory();
    const dispatch = useDispatch()
    const {start}=useSelector(state=>{return(state.profil)})
        return(
            <div >
                <SignNav />
               <div className="LoginPage">
                <div className="Login">
                <p className="text-danger col-md-6">{props.profil.errorMsg}</p>
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
                            <button className="btn btn-sm btn-success" disabled={start} onClick={()=> dispatch(logIn(users.Email,users.Password, history,users.photo))} >
                                Login 
                                {start ?<div className="spinner-border text-danger spinner-border-sm"  role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>:<div></div>}
                            </button>
                        
                        </div>
                        <br></br>
                </div>
               </div> 
        </div>)
}

export default connect(r=>r)(Login)