import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {GetSearchUserPhotos} from '../../Redux/action/userPagePhotosAction'
import Card from '../card/card';
function UserPhotos(){
    const dispatch=useDispatch()
    const parms=useParams().uid
    const [photo,setPhoto]=useState(false)
    const  {userPhoto}= useSelector(state=>state.userPagePhotos)
    useEffect(()=>{
        if(userPhoto!==[]){
            setPhoto(true)
        }
        if(userPhoto===null||userPhoto===undefined){
            setPhoto(false)
        }
        dispatch(GetSearchUserPhotos(parms))
    },[])
    return (
    <div>
        <h1>Photos</h1>
        {photo &&
         <Card props={userPhoto.photos}  />   
        }
    </div>)
}
export default UserPhotos