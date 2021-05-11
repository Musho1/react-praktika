import slider from "../state/slider";

function SliderReducer(state=slider,action){
    let temp={...state}
    if(action.type=="next"){
        temp.active=action.value+1
    }
    return(temp)
}
export default SliderReducer