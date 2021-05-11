import {combineReducers} from 'redux'
import PhotosReducer from './photosReducer'
import ProfilReducer from './profileReducer'
import SliderReducer from './sliderReducer'
import UserReducer from "./userReduser"
export default combineReducers({
    profil:ProfilReducer,
    user:UserReducer,
    photo:PhotosReducer,
    slider:SliderReducer,
})

