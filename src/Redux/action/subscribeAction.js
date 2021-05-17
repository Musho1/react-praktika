import { db } from '../../firebase';
export const  getfriendsdata=(data)=>{
    let friends=[]
    let userfriends=[]
    return (dispatch)=>{
        if(data!==undefined && Object.keys(data).length!==0 &&data!==null){
            Object.values(data.friends).map((elm,i)=>{
                if(elm.request===true){
                db.ref(`/user/${elm.uid}`).on('value', (userData) => {
                    userfriends.push({name:userData.val().name,surname:userData.val().surname,avatar:userData.val().avatar,uid:userData.val().uid})
                    Object.values(userData.val().photos).map((photo,i)=>{
                        friends.push( {photo:photo,name:userData.val().name,surname:userData.val().surname,avatar:userData.val().avatar,uid:userData.val().uid})
                    })
                    friends=friends.sort((a,b)=>b.photo.date-a.photo.date)
                    })
                dispatch(endgetFriendsdata(friends,userfriends))    
                }
            })
    }  
}

}

const endgetFriendsdata=(friends,userfriends)=>{
    return {
        type:"endgetFriendsdata",
        values:friends,
        userfriends:userfriends
    }
}