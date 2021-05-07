import firebase from 'firebase'
import {db} from '../../firebase';
import user from '../state/user';
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
         firebase.storage().ref().child(`images/${uid}`).getDownloadURL().then(function(url) 
        {
            
            dispatch(ChangeAvatar(url))
        })
        .catch((error)=>console.log(error))
    })
    }
} 
const endChangeAvatar=(user)=>{
    return {
        type:"endChangeAvatar",
        value:user
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
export const saveImg=(elm,uid)=>{
    console.log(uid)
    return (dispatch)=>{
        dispatch(StartChangeImg())
        let fileName = uid
        let storage = firebase.storage().ref(`images/`).child(fileName).put(elm)
                .then( d =>{
                   dispatch(successChangeImg())
                })
                .catch( d => console.log("sssssss"))
    }
}
export const changeImg=(elm)=>{
    return {
        type:"changeImg",
        value:elm,
    }
}
export const closeImg=(elm,url)=>{
    return {
        type:"lastAvatar",
        value:url
    }
}
