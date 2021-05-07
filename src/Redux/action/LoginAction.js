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
const successEnd=()=>{
    return {
        type:"success"
    }
}

export const LogOut = ()=> {
    return function (dispatch) {
        dispatch(startSingOut)
        firebase.auth().signOut()
            .then(()=>{
                 dispatch(successEnd)
            })
            .catch((error) =>{console.log(error)})
    }
}


export const logIn = (email, password, history,photo)=> {
    return function (dispatch) {
        dispatch(startLogIn());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                dispatch(successLogIn(user))
                user=(user.user.value)
                history.push("/profile");
            })
            .catch((error) => dispatch(errorLogIn(error)))
    }
}