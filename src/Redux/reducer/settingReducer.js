import setting from "../state/setting";

function SettingReducer(state=setting,action){
    let temp={...state}

    if(action.type=="startUpdateProfile"){
        console.log(temp)
        temp.start=true
    }
    if(action.type=="endUpdateProfile"){
        temp.start=false
    }
    if(action.type=="SettingActive"){
        temp.active=action.value
    }
    return (temp)
}
export default SettingReducer