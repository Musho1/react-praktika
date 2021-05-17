import {combineReducers} from 'redux'
import UserPagePhotosReducer from './userPagePhotosReducer'
import PhotosReducer from './photosReducer'
import ProfilReducer from './profileReducer'
import SearchReducer from './searchReducer'
import SettingReducer from './settingReducer'
import SliderReducer from './sliderReducer'
import UserPageReducer from './userPageReducer'
import UserReducer from "./userReduser"
import FriendsReducer from './friendsEducer'
import GoogleLoginReducer from './GoogleLoginReducer'
export default combineReducers({
    profil:ProfilReducer,
    user:UserReducer,
    photo:PhotosReducer,
    slider:SliderReducer,
    setting:SettingReducer,
    search:SearchReducer,
    userPage:UserPageReducer,
    userPagePhotos:UserPagePhotosReducer,
    friends:FriendsReducer,
    googleLogin:GoogleLoginReducer,
})