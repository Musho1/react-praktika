import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {GetSearchUserPhotos} from '../../Redux/action/userPagePhotosAction';
import Card from '../card/card';

function UserPhotos(){
    const dispatch=useDispatch()
    const params=useParams();
    const { uid } = params;
    const [photo,setPhoto]=useState(false)
    const  { photos }= useSelector(state=>state.userPage.userPageData);
        useEffect(()=>{
        dispatch(GetSearchUserPhotos(uid))
    },[photos])
    return (
    <div>
        <h1>Photos</h1>
        {  <Card photos={photos}  />}   
    </div>)
}
export default UserPhotos