import setting from "../state/setting";

function SettingReducer(state=setting,action){
    let temp={...state}

    if(action.type==="startUpdateProfile"){
        temp.start=true
    }
    if(action.type==="endUpdateProfile"){
        temp.start=false
    }
    if(action.type==="SettingActive"){
        temp.active=action.value
    }
    if(action.type==="isPublic"){
        console.log(action.value.checkedB)
        temp.Public=action.value.checkedB
    }
    return (temp)
}
export default SettingReducer