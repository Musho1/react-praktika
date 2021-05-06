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
            console.log(user)
            break
        }
        case "errorLogIn":{
            temp.isActiv=false
            temp.errorMsg="The email address or password is badly formatted"
            temp.start=false
            break
        }
        case "startLogIn":{
            temp.start=true;
        }
        case "successEnd":{
            temp.userAuth.isActive=false
            console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"+temp)
            Redirect("/")
            alert("sssss")
        }
        default:
            break
    }

    return temp
}
export default ProfilReducer