import setting from "../state/setting";

function SettingReducer(state=setting,action){
    console.log(action.type+"8888888888")
    let temp={...state}

    if(action.type=="startUpdateProfile"){
        console.log(temp)
        temp.start=true
    }
    if(action.type=="endUpdateProfile"){
        temp.state=false
    }
    if(action.type=="SettingActive"){
        temp.active=true
    }
    return (temp)
}
export default SettingReducer