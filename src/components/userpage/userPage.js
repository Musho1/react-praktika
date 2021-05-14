import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import "./userpage.scss";
import { getSearchUserPage } from "../../Redux/action/userPageAction";
import Loading from "../loading/Loading";
import UserWrapper from './userWrapper';

function UserPage (){
    const dispatch=useDispatch()
    const params=useParams();
    const{userPageData}= useSelector(state=>state.userPage)

    const {loadingUserPage}=useSelector(state=>state.userPage)
    useEffect(()=>{
        dispatch(getSearchUserPage(params.uid))
    },[])
    return (
        loadingUserPage
        ?
        <Loading />
        :
        <UserWrapper userPageData={userPageData} >
        </UserWrapper>
    )

}
export default UserPage