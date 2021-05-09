import user from "../state/user"

function UserReducer(state=user, action) {
    let temp={...state}
    if (action.type === "startCheckUser") {
        temp.userAuth = {
            ...temp.userAuth,
            isRequesting: true,
        }
        temp.user={
            ...temp.user,
             isFetching: false,
        }
    }
    if (action.type === "endCheckUser") {
        if (action.userAuth !== null) {
            temp.userAuth = {
                ...temp.userAuth,
                isActive: true,
                uid: action.userAuth.uid,
                isRequesting: false,
            }
            temp.user={
                ...temp.user,
                 isFetching: false,
            }
        }
        else {
            temp.userAuth = {
                ...temp.userAuth,
                isActive: false,
                uid: null,
                isRequesting: false,
            }
            temp.user={
                ...temp.user,
                 isFetching: true,
            }
        }
    }
    if (action.type === "startGetUserData") {
        temp.user = {
            ...temp.user,
            isFetching: true,
        }
    }
    if(action.type === "endGetUserData") {
        temp.user = {
            ...temp.user,
            isFetching: false,
            data: action.data,
        }

    }
    if(action.type==="endChangeAvatar"){
        temp.user.data.Avatar=action.value
        console.log(action.value)
    }
    if(action.type==="lastAvatar"){
        temp.user.data.Avatar=action.value
    }
    if(action.type==="ChangeAvatar"){
        temp.user.data.avatar=action.value
    }
    if(action.type==="changeImg"){
        temp.avatar=temp.user.data.avatar
        temp.user.data.avatar=URL.createObjectURL(action.value)
    }
    if(action.type==="lastAvatar"){

        console.log(action.value)
        temp.user.data.avatar=action.value
    }
    
    if(action.type==="StartChangeImg"){
        temp.startImg=true
    }
    if(action.type==="successChangeImg"){
        temp.startImg=false
    }
    if(action.type==="Loading"){
        temp.loading=action.value
    }


    return temp
}
export default UserReducer