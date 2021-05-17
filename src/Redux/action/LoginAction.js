import firebase from 'firebase'

const startLogIn = () => {
    return {
        type: "startLogIn"
    }
};

const errorLogIn = (error) => {
    return {
        type: "errorLogIn",
        error,
    }
}

const successLogIn = (user) => {
    return {
        type: "successLogin",
        user,
    }
}
const startSingOut=()=>{
    return {
        type:"start"
    }
}
const endLogOut=()=>{
    return {
        type:"endLogOut"
    }
}

export const LogOut = ()=> {
    return  (dispatch)=> {
        dispatch(startSingOut)
        firebase.auth().signOut()
            .then(()=>{
                dispatch(errorLogIn(""))
                 dispatch(endLogOut)
            })
            .catch((error) =>{console.log(error)})
    }
}


export const logIn = (email, password, history)=> {
    return function (dispatch) {
        dispatch(startLogIn());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                    dispatch(successLogIn(user))
                    user=(user.user.value)
                    history.push("/profile");
                    if(firebase.auth().currentUser){
                        if(!firebase.auth().currentUser.emailVerified){
                            firebase.auth().currentUser.sendEmailVerification()
                            .then(()=>{
                                console.log("send email cod")
                            })  
                            dispatch(errorLogIn("ss")) 
                        }
                    }
            })
            .catch((error) =>{   
                dispatch(errorLogIn("The email address is badly formatted"))
            })
    }
}