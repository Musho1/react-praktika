import "./cardsubscribe.scss";

function CardSubscribe (props){
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