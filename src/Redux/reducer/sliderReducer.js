import slider from "../state/slider";

function SliderReducer(state=slider,action){
    let temp={...state}
    if(action.type==="SliderActive"){
        temp.sliderActive=action.value
    }
    return(temp)
}
export default SliderReducer