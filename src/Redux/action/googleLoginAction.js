import firebase from 'firebase'

export const singinwhiteGoogle=()=>{
    return (dispatch)=>{
        let provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                let  credential = result.credential.accessToken;
                let user = result.user;
        })
            .catch((error) => {
                let errorCode = error.code;
                let  errorMessage = error.message;
                let email = error.email;
                let credential = error.credential;
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