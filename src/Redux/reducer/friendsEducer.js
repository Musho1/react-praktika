import friends from "../state/friends";

function FriendsReducer(state=friends,action){
    let temp={...state}
    if(action.type==="endgetFriendsdata"){
        temp.friendsPost=action.values
    }
    return temp
}
export default FriendsReducer