import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./setting.scss" 
import {Save} from "../../Redux/action/settingAction"
function Setting(){
    const {data} = useSelector(state => state.user.user)
    const {uid} = useSelector(state => state.user.userAuth)
    const [changeUser,setChangeUser]=useState({name:data.name,surname:data.surname,email:data.email,password:data.password,age:data.age,uid:uid})
    const {start} = useSelector(state => state.setting)
    const {active} = useSelector(state => state.setting)
    const dispatch =useDispatch()
    useEffect(()=>{
        console.log(start+"989898989")
    },[])
    if(active){
    return (<div className="setting">
        {start?<div class="spinner-border text-danger" role="status"></div>:""}
        <div className="form-group">
            <label>Name</label>
            <input value={changeUser.email} disabled={true} className="form-control"></input>
        </div>
        <div className="form-group">
            <label>Name</label>
            <input value={changeUser.name}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,name:e.target.value})}} ></input>
        </div>
        <div className="form-group">
            <label>Surname</label>
            <input value={changeUser.surname}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,surname:e.target.value})}} ></input>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input value={changeUser.age}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,age:e.target.value})}} ></input>
        </div>
        <div className="form-group">
            <label>password</label>
            <input value={changeUser.password}  className="form-control" onChange={(e)=>{setChangeUser({...changeUser,password:e.target.value})}} ></input>
        </div>
        <div>
            <button className="btn btn-su btn-success" onClick={()=>dispatch(Save(changeUser,uid))}>Save</button>
        </div>
    </div>)
    }
    else {
        return("")
    }
}
export default Setting