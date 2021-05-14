import {db, firebase} from '../../firebase';
export const  getfriendsdata=(data)=>{
    let friends=[]
    return (dispatch)=>{
        Object.values(data.friends).map((elm,i)=>{
            console.log(elm.request)
            if(elm.request===true){
            db.ref(`/user/${elm.uid}`).on('value', (userData) => {
                Object.values(userData.val().photos).map((photo,i)=>{
                    friends.push( {photo:photo,name:userData.val().name,surname:userData.val().surname,avatar:userData.val().avatar})
                })
                })
            dispatch(endgetFriendsdata(friends))    
            }
        })
    
    
}

}

const endgetFriendsdata=(friends)=>{
    return {
        type:"endgetFriendsdata",
        values:friends,
    }
}