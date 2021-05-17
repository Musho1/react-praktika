import { Redirect } from "react-router"
import user from "../state/user"
function ProfilReducer(state=user,action){
    let temp={...state}
    switch(action.type){
        case "successLogin":{
            temp.userAuth = {
                ...temp.userAuth,
                isActive: true,
            }
            temp.start=false
            break
        }
        case "errorLogIn":{
            temp.userAuth.isActiv=false
            temp.errorMsg=action.error
            temp.start=false
            break
        }
        case "startLogIn":{
            temp.start=true;
        }
        case "startSingOut":{
            temp.userAuth = {
                ...temp.userAuth,
                isActive: false,
            }
            Redirect("/")
        }
        default:
            break
    }
    return temp
}
export default ProfilReducer