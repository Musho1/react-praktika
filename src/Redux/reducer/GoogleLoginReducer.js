import googleLogin from "../state/googleLogin";

function GoogleLoginReducer(state=googleLogin,action){
    let temp={...state}
    if(action.type==="forgotPassword"){
        temp.loginWhiteGoogle=true
    }
    if(action.type==="endGetPAsswordWhiteGoogle"){
        console.log("sended")
        temp.loginWhiteGoogle=false
    }
    return temp
}
export default GoogleLoginReducer