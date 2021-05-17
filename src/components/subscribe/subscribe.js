import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfriendsdata } from "../../Redux/action/subscribeAction"
import Profile from "../loginSignUp/Profile"
import CardSubscribe from "./cardSubscribe"
function Subscribe (props){
  const dispatch=useDispatch()
   const {friendsPost}=useSelector(state=>(state.friends))
   const {data} = useSelector(state => state.user.user)
    useEffect(()=>{
            dispatch(getfriendsdata(data))
    },[data])
    return (<Profile className="children" >
        {
           friendsPost.map((elm,i)=>{
             return   <CardSubscribe key={i} post={elm} />
           })
        }
    </Profile>)
}
export default Subscribe