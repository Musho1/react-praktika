import {combineReducers} from 'redux'
import ProfilReducer from './profileReducer'
import UserReducer from "./userReduser"
export default combineReducers({
    profil:ProfilReducer,
    user:UserReducer,
})

