import { useHistory } from "react-router";
import "./friends.scss";
function FriendsList(props){
    const history=useHistory()
    return (
    <div className="friends" onClick={()=>{
        history.push(`user/${props.friend.uid}`)
    }}>
        <img className="friendsImg" src={props.friend.avatar} />
        <p>{props.friend.name} {props.friend.surname}</p>
    </div>)
}
export default FriendsList