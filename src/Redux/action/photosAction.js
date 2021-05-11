import firebase from 'firebase';
import {db} from '../../firebase';
const saving=(loading)=>{
    return{
        type:"Loading",
        value:loading
    } 
}


export function SavePhoto(uid,img,title){
    var d = Date.now();
    return (dispatch)=>{
        const storage=firebase.storage().ref(`Photos/${uid}`).child(uid+d).put(img)
        storage.on(
            'state_changed',
            (snapShot) =>{
                const percentUploaded = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100);
                firebase.storage().ref().child(`Photos/${uid}/${uid+d}`).getDownloadURL()
                .then(function(url) 
                {
                    const keyId = db.ref(`/user/${uid}/photos`).push().getKey();
                    db.ref(`/user/${uid}/photos`).push({url, id: keyId,title:title,date:d})
                 })
                 dispatch(saving(percentUploaded))
            }
        )
    }
}