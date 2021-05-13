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
    const {sliderPhotos}=useSelector(state=>(state.slider))
    useEffect(()=>{
        console.log(userPhoto)
        if(userPhoto!==[]){
            setPhoto(true)
            
        }
        if(userPhoto===null||userPhoto===undefined){
            setPhoto(false)
        }
        dispatch(GetSearchUserPhotos(parms))
        console.log(parms)
    },[])
    return (<div>
        <h1>Photos</h1>
        {photo &&
        Object.values(userPhoto.photos).map((elm,i)=>{
            if(!sliderPhotos.includes({photo:elm.url,title:elm.title})&& sliderPhotos.length< Object.values(userPhoto.photos).length){
                sliderPhotos.push({photo:elm.url,title:elm.title})
            }
           return <Card key={i} img={elm.url} title={elm.title}  />
        })
            
        }
        
    </div>)
}
export default UserPhotos