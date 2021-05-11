import photo from "../state/photo"

function PhotosReducer(state=photo,action){
    let temp={...state}
    if(action.type="Loading"){
        temp.loading=action.value
    }
    if(action.type=="getphotos"){
        temp.photos=action.value
    }
    return temp
}
export default PhotosReducer