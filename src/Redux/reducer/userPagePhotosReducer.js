import userPagePhotos from "../state/userPagePhotos";

function UserPagePhotosReducer(state=userPagePhotos,action){
    let temp={...state}
    console.log(temp)
    if(action.type==="endGetSearchUserPhotos"){
        temp.userPhoto=action.value
    }
    return temp
}
export default UserPagePhotosReducer