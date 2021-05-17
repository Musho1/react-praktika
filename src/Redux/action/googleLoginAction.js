import firebase from 'firebase'
import { useHistory } from 'react-router';

export const singinwhiteGoogle=()=>{
    return (dispatch)=>{
        let provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential.accessToken;
                var user = result.user;
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
              });
    }
}
export const forgotPassword=()=>{
    return{
        type:"forgotPassword",
    }
}
export const  GetPAsswordWhiteGoogle=(mail)=>{
    
    return (dispatch)=>{
        firebase.auth().sendPasswordResetEmail(mail).then(()=>{
            dispatch(endGetPAsswordWhiteGoogle())
        })
    }
}
export const endGetPAsswordWhiteGoogle=()=>{
    return {
        type:"endGetPAsswordWhiteGoogle"
    }
}