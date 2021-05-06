import firebase from 'firebase'
import {db} from '../../firebase'

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

export const getUserData = (uid) => {
    return function(dispatch) {
        dispatch(startGetUserData());
        db.ref(`/user/${uid}`).on('value', (userData) => {
            console.log(userData.val());
            dispatch(endGetUserData(userData.val()))
        })
    }
} 