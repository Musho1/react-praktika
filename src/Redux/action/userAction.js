import firebase from 'firebase'
import {db} from '../../firebase';


const startCheckUser = () => {
    return {
        type:"startCheckUser",
    }
}

const endCheckUser = (userAuth) => {
    return {
        type:"endCheckUser",
        userAuth,
    }
}
export const isActiv = () => {
    return function(dispatch) {
        dispatch(startCheckUser())
        firebase.auth().onAuthStateChanged((u) =>{
            dispatch(endCheckUser(u))
        });
    }
}

const startGetUserData = () => {
    return {
        type: "startGetUserData"
    };
};

const errorGetUserData = (error) => {
    return {
        type: "errorGetUserData",
        error,
    }
};
const endGetUserData = (data) => {
    return {
        type: "endGetUserData",
        data,
    }
}
const ChangeAvatar=(url)=>{
    
    return{
        type:"ChangeAvatar",
        value:url
    }
}


export const getUserData = (uid) => {
    return function(dispatch) {
        dispatch(startGetUserData());
        db.ref(`/user/${uid}`).on('value', (userData) => {
            dispatch(endGetUserData(userData.val()))
         firebase.storage().ref().child(`images/${uid}`).getDownloadURL()
         .then(function(url) 
         {
            db.ref(`/user/${uid}/avatar`).set(url)
            dispatch(ChangeAvatar(url))
            console.log(url)
         })
        .catch((error)=>console.log(error))
    })
    }
} 
const StartChangeImg=()=>{
    return{
        type:"StartChangeImg"
    }
}
const successChangeImg =()=>{
    return{
        type:"successChangeImg"
    }
}
const Loading=(Loading)=>{
    return{
        type:"Loading",
        value:Loading
    }
}
export const saveImg=(elm,uid)=>{
    return (dispatch)=>{
        dispatch(StartChangeImg())
        const storage=(firebase.storage().ref(`images/`).child(uid).put(elm))
        storage.on(
            'state_changed',
            (snapShot) =>{
                const percentUploaded = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100);
                dispatch(Loading(percentUploaded))
            }
            
        )
        
        
     }
}
export const changeImg=(elm)=>{
    return {
        type:"changeImg",
        value:elm,
    }
}
export const closeImg=(elm)=>{
    return {
        type:"lastAvatar",
        value:elm
    }
}
