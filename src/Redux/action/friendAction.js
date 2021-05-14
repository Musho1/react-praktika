import {db} from '../../firebase';
export const AddFriends=(uid,userUid,publick)=>{
    let friend={uid:userUid,request:publick}
    return (dispatch)=>{
        db.ref(`/user/${uid}/friends`).push(friend).then(console.log("success"))
    }
}
