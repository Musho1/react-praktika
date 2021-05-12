import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./setting.scss";
import {Save} from "../../Redux/action/settingAction";
function Setting(){
    const {data} = useSelector(state => state.user.user)
    const {uid} = useSelector(state => state.user.userAuth)
    const [changeUser,setChangeUser]=useState({name:data.name,surname:data.surname,email:data.email,password:data.password,age:data.age,uid:uid})
    const {start} = useSelector(state => state.setting)
    const dispatch =useDispatch()

    return (
    <div className="SettingComponent">
        <div className="setting">
            {start?<div className="spinner-border text-danger" role="status"></div>:""}
            <div className="form-group">
                <label for="1">Name</label>
                <input value={changeUser.email} disabled={true} className="form-control"></input>
            </div>
            <div className="form-group">
                <label for="2">Name</label>
                <input value={changeUser.name}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,name:e.target.value})}} ></input>
            </div>
            <div className="form-group">
                <label for="3">Surname</label>
                <input value={changeUser.surname}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,surname:e.target.value})}} ></input>
            </div>
            <div className="form-group">
                <label for="age">Age</label>
                <input value={changeUser.age}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,age:e.target.value})}} ></input>
            </div>
            <div className="form-group">
                <label for="ss">password</label>
                <input value={changeUser.password}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,password:e.target.value})}} ></input>
            </div>
            <div>
                <button className="btn btn-su btn-success" onClick={()=>dispatch(Save(changeUser,uid))}>Save</button>
            </div>
        </div>
    </div>)
}
export default Setting