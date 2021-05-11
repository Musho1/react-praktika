import photo from "../state/photo"

function PhotosReducer(state=photo,action){
    let temp={...state}
    if(action.type==="StartSavingPhoto"){
        temp.show=true
    }
    if(action.type==="endSavingPhoto"){
        temp.show=false
        temp.addDiv=false
    }
    if(action.type==="AddDiv"){
        temp.addDiv=true
    }
    if(action.type==="getphotos"){
        temp.photos=action.value
    }
    return temp
}
export default PhotosReducer