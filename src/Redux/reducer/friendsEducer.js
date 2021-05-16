import friends from "../state/friends";

function FriendsReducer(state=friends,action){
    let temp={...state}
    if(action.type==="endgetFriendsdata"){
        action.values=action.values.sort((a,b)=>b.photo.date-a.photo.date)
        temp.friendsPost=action.values
        temp.friends=action.userfriends
    }
    return temp
}
export default FriendsReducer