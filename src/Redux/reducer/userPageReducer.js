import userPage from "../state/userPage";

function UserPageReducer (state=userPage,action){
    let temp={...state}
    if(action.type==="endgetSearchUserPage"){
        temp.userPageData=action.data
    }
    return temp

}
export default UserPageReducer