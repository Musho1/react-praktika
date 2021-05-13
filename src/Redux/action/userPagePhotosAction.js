import {db} from '../../firebase';
const  startGetSearchUserPhotos=()=>{
    return {
        type:"startGetSearchUserPhotos"
    }
}

export const GetSearchUserPhotos=(uid)=>{
    return (dispatch)=>{
        dispatch(startGetSearchUserPhotos())
        db.ref(`/user/${uid}`).on('value',function(user){
            dispatch(endGetSearchUserPhotos(user.val()))
        })
    }

}

const endGetSearchUserPhotos=(elm)=>{
    return{
        type:"endGetSearchUserPhotos",
        value:elm
    }
}