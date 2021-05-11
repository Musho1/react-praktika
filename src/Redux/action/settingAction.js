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
export const Save=(data,uid)=>{
    return (dispatch)=>{
        dispatch(startSetting())
        console.log(data, uid)
    
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