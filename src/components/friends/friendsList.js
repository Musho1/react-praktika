import { useEffect } from "react"
import "./friends.scss";
function FriendsList(props){
    console.log(props.friend+"888888888888")
    return (
    <div className="friends">
        <img className="friendsImg" src={props.friend.avatar} />
        <p>{props.friend.name} {props.friend.surname}</p>
    </div>)
}
export default FriendsList