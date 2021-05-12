import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import "./userpage.scss";
import { getSearchUserPage } from "../../Redux/action/userPageAction";
function UserPage (){
    const dispatch=useDispatch()
    const pathname=useLocation().pathname
    const{userPageData}= useSelector(state=>state.userPage)
    useEffect(()=>{
        dispatch(getSearchUserPage(pathname.substring(6,pathname.length)))
    },[])
    return <div className="userpage">
        <div >
            <img className="userAvavtar" src={userPageData.avatar?userPageData.avatar:""}></img>
            <p>{userPageData.name} {userPageData.surname}</p>
            <p className="age">{userPageData.age}</p>
        </div>
        <button className="btn btn-sm btn-success">Follow</button>
    </div>
}
export default UserPage