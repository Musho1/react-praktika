// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getfriendsdata } from "../../Redux/action/subscribeAction";
// import Profile from "./loginSignUp/Profile";

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfriendsdata } from "../../Redux/action/subscribeAction"
import Profile from "../loginSignUp/Profile"
import FriendsList from "./friendsList"

// function Friends (){
//     const {friendsPost}=useSelector(state=>state.friends)
//     const {data} = useSelector(state => state.user.user)
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         if(data!==undefined){
//             dispatch(getfriendsdata(data))
//         }
//     },[data])
//     console.log(friendsPost)
//     return (<Profile>
//         <h1>Friends</h1>
//     </Profile>)
// }
// export default Friends
function Friends(){
    const {data} = useSelector(state => state.user.user)
    const {friends}=useSelector(state=>(state.friends))
    const dispatch=useDispatch()
    useEffect(()=>{
        if(data!==undefined){
            dispatch(getfriendsdata(data))
        }
    },[data])  
    console.log(friends)        
    return (<Profile>
            <h1>Friends</h1>
            { 
              friends.map((elm,i)=>{
                  return <FriendsList friend={elm}></FriendsList>
              })
            }
        </Profile>)
}
export  default Friends