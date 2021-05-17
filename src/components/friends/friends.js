 
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfriendsdata } from "../../Redux/action/subscribeAction"
import Profile from "../loginSignUp/Profile"
import FriendsList from "./friendsList"


function Friends(){
    const {data} = useSelector(state => state.user.user)
    const {friends}=useSelector(state=>(state.friends))
    const dispatch=useDispatch()
    useEffect(()=>{
        if(data!==undefined){
            dispatch(getfriendsdata(data))
        }
    },[data])        
    return (
    <div>
        <Profile className="friendsBlock col-md-10"> 
        <div>
            <h1 className="text-center">friends</h1>
        </div>
        <div className="friendsList">
                { 
                friends.map((elm,i)=>{
                    return <FriendsList friend={elm}></FriendsList>
                })
                }
        </div>        
        </Profile>
    </div>
    )
}
export  default Friends