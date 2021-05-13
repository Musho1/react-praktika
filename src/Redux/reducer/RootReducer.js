import {combineReducers} from 'redux'
import UserPagePhotosReducer from './userPagePhotosReducer'
import PhotosReducer from './photosReducer'
import ProfilReducer from './profileReducer'
import SearchReducer from './searchReducer'
import SettingReducer from './settingReducer'
import SliderReducer from './sliderReducer'
import UserPageReducer from './userPageReducer'
import UserReducer from "./userReduser"
export default combineReducers({
    profil:ProfilReducer,
    user:UserReducer,
    photo:PhotosReducer,
    slider:SliderReducer,
    setting:SettingReducer,
    search:SearchReducer,
    userPage:UserPageReducer,
    userPagePhotos:UserPagePhotosReducer,
})

