import {db} from '../../firebase';
const startgetSearchUserPage=()=>{
    return{
        type:"getSearchUserPage",
    }
}
const endgetSearchUserPage=(data)=>{
    return{
        type:"endgetSearchUserPage",
        data:data,
    }
}
export const getSearchUserPage=(uid)=>{
    return (dispatch)=>{
        dispatch(startgetSearchUserPage)
        db.ref(`/user/${uid}`).on('value',function(user){
            dispatch(endgetSearchUserPage(user.val()))
        })
    }
}