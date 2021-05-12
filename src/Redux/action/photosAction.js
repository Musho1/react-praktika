import firebase from 'firebase';
import {db} from '../../firebase';
const saving=(loading)=>{
    return{
        type:"Loading",
        value:loading
    } 
}
const StartSavingPhoto=()=>{
    return {
        type:"StartSavingPhoto"
    }
}
const endSavingPhoto=()=>{
    return {
        type:"endSavingPhoto"
    }
}
export const AddDiv=()=>{
    alert("ss")
    return {
        type:"AddDiv"
    }
}
export function SavePhoto(uid,img,title){
    if(img!==""){
    var d = Date.now();
    return (dispatch)=>{
        dispatch(StartSavingPhoto)
        const storage=firebase.storage().ref(`Photos/${uid}`).child(uid+d).put(img)
        .then(()=>{
            dispatch(endSavingPhoto())
            firebase.storage().ref().child(`Photos/${uid}/${uid+d}`).getDownloadURL()
            .then(function(url) 
            {
                const keyId = db.ref(`/user/${uid}/photos`).push().getKey();
                db.ref(`/user/${uid}/photos`).push({url, id: keyId,title:title,date:d})
                
             })
        })
        // storage.on(
        //     'state_changed',
        //     (snapShot) =>{
        //         const percentUploaded = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100);
        //         dispatch(saving(percentUploaded))
        // }
        // )
    }
}
    
}