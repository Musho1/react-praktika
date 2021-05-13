import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import "./userpage.scss";
import { getSearchUserPage } from "../../Redux/action/userPageAction";
import PageNav from "../navs/PageNav";
import UserNav from "../navs/UserNav";
import Private from "./private.jpg"
import Loading from "../loading/Loading";
import LockIcon from '@material-ui/icons/Lock';
import UserPhotos from "./userPhotos";
function UserPage (){
    const dispatch=useDispatch()
    const pathname=useLocation().pathname
    const parms=useParams();
    const { uid } = parms;
    const{userPageData}= useSelector(state=>state.userPage)
    const {loadingUserPage}=useSelector(state=>state.userPage)
    console.log(useParams().uid)
    console.log(userPageData.public)
    useEffect(()=>{
        console.log(userPageData)
        dispatch(getSearchUserPage(parms.uid))
    },[uid])
    return (loadingUserPage?<Loading />:
    <div className="userpage">
        <div>
            <PageNav />
        </div>
       <div className="UserUerNav"> 
            <div className="userData">
            <div className="Card"> 
                <img className="userAvavtar" src={userPageData.avatar?userPageData.avatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"}></img>
                <div className="NameSurname">
                    <p>{userPageData.name} {userPageData.surname}</p>
                    <p className="age">{userPageData.age}</p>
                </div>
                <div>
                    <button className="btn btn-sm btn-success follow">Follow</button>
                    <br></br>
                </div>
                </div>   
            </div>
            <div className="UserNav">
                <UserNav uid={pathname.substring(6,pathname.length)}/>
            <div className="public">
            {
                
                !userPageData.public && <img className="private" src={Private}/>
            }
            </div>
            <div>
                {
                    <div>
                        { pathname.includes('userPhoto') && <UserPhotos />}
                    </div>
                }
            </div>    
            </div>    
        </div>
    </div>)

}
export default UserPage