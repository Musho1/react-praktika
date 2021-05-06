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
        temp.userAuth = {
            ...temp.userAuth,
            isActive: true,
        }
    }
    return temp
}
export default UserReducer