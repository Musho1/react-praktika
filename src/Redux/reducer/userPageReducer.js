import userPage from "../state/userPage";

function UserPageReducer (state=userPage,action){
    let temp={...state}
    if(action.type==="startgetSearchUserPage"){
        temp.loadingUserPage=true
    }
    if(action.type==="endgetSearchUserPage"){
        temp.userPageData=action.data
        temp.loadingUserPage=false
    }
    return temp

}
export default UserPageReducer