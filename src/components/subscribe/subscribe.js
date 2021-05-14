import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfriendsdata } from "../../Redux/action/subscribeAction"
import { getSearchUserPage } from "../../Redux/action/userPageAction"
import CardSubscribe from "./cardSubscribe"
import "./subscribe.scss";
function Subscribe (props){
  const dispatch=useDispatch()
   const {friendsPost}=useSelector(state=>(state.friends))
   const [sortfriendsPost,setSortfriendsPost]=useState([])
    useEffect(()=>{
        console.log(props)
        if(Object.keys(props.data).length!==0){
            console.log("sssssssss")
            dispatch(getfriendsdata(props.data))
        }
        setSortfriendsPost(friendsPost.sort((a,b)=>b.photo.date-a.photo.date))
        console.log(friendsPost)
    },[])
    return (<div className="subscribe1" >
        {
           friendsPost.map((elm,i)=>{
             return   <CardSubscribe key={i} post={elm} />
           })
        }
    </div>)
}
export default Subscribe