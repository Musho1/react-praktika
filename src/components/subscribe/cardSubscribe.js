import "./cardsubscribe.scss";
import { useHistory } from 'react-router-dom';
function CardSubscribe (props){
    console.log(props)
    const history=useHistory()
    return (<div className="postblock">
        <div className="PostUserData"> 
            <img className="PostAvatar" src={props.post.avatar}></img>
            <p>{props.post.name} {props.post.surname}</p>
        </div>
        <div className="postdiv">
            <img className="post" src={props.post.photo.url} ></img>
            <p className="text-center">{props.post.photo.title}</p>
        </div>
    </div>)
}
export default CardSubscribe