import photo from "../state/photo"

function PhotosReducer(state=photo,action){
    let temp={...state}
    // if(action.type="Loadingimg"){
    //     temp.loading=action.value
    // }
    if(action.type=="getphotos"){
        temp.photos=action.value
    }
    return temp
}
export default PhotosReducer