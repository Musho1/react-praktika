import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { GetPAsswordWhiteGoogle,endGetPAsswordWhiteGoogle } from "../../Redux/action/googleLoginAction"
import "./googlePassword.scss" 

function GooglePasdsword(){
    const history=useHistory()
    const dispatch=useDispatch()
    const [mail,setMail]=useState("")
    return (<div className="form-group changePassword"  >
        <label htmlFor="Email addres">Email</label>
        <input className="form-control" value={mail} onChange={(e)=>setMail(e.target.value)} />
        <br></br>
        <button className="btn btn-sm btn-success"  onClick={()=>dispatch(GetPAsswordWhiteGoogle(mail,history))} >Login</button>
        <button className="btn btn-sm btn-danger" onClick={()=>dispatch(endGetPAsswordWhiteGoogle())}>Cancle</button>
    </div>)
}
export default GooglePasdsword