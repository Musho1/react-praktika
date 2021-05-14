import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import UserWrapper from './userWrapper';
import UserPhotos from "./userPhotos";
import { useParams } from 'react-router-dom';
import { getSearchUserPage } from "../../Redux/action/userPageAction";


const UserPagePhoto = () => {
    const params = useParams();
    const { uid } = params;
    const{userPageData}= useSelector(state=>state.userPage);
    const dispatch = useDispatch();
    console.log(userPageData)
    useEffect(()=>{
        dispatch(getSearchUserPage(uid))
    },[uid])
    return (
        <UserWrapper userPageData={userPageData} >
            <UserPhotos/>
        </UserWrapper>
    )
}

export default UserPagePhoto;