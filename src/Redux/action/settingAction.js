import {db, firebase} from '../../firebase';
const startSetting=()=>{
    return {
        type:"startUpdateProfile"
    }
}
const endSetting=()=>{
    return{
        type:"endUpdateProfile"
    }
}
const errorSetting=()=>{
    return {
        type:"errorUpdateProfile"
    }
}
export const  isPublic=(value)=>{
    return{
        type:"isPublic",
        value:value
    }
}
export const Save=(data,uid,Public)=>{
    return (dispatch)=>{
        dispatch(startSetting())
        data.public=Public
        db.ref(`/user/`).child(uid).update(data)
        .then(()=>{
            // if (data.password !== '' || data.password.length >= 6) {
            //     firebase.auth().currentUser.updatePassword(data.password);
            // }
            dispatch(endSetting())
        })
        .catch(()=>{
            dispatch(errorSetting())
        })
    }
}
export const SettingActive=(bool,index)=>{
    return {
        type:"SettingActive",
        value:bool,
        index:index
}
}