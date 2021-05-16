import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfriendsdata } from "../../Redux/action/subscribeAction"
import { getSearchUserPage } from "../../Redux/action/userPageAction"
import Profile from "../loginSignUp/Profile"
import CardSubscribe from "./cardSubscribe"
import "./subscribe.scss";
function Subscribe (props){
  const dispatch=useDispatch()
   const {friendsPost}=useSelector(state=>(state.friends))
   const {data} = useSelector(state => state.user.user)
    useEffect(()=>{
            dispatch(getfriendsdata(data))
            console.log(friendsPost)
            console.log(data)
    },[data])
    return (<Profile className="subscribe1" >
        {
           friendsPost.map((elm,i)=>{
             return   <CardSubscribe key={i} post={elm} />
           })
        }
    </Profile>)
}
export default Subscribe