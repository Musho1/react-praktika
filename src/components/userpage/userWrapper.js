import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageNav from "../navs/PageNav";
import UserNav from "../navs/UserNav";
import { useDispatch, useSelector } from 'react-redux';
import { AddFriends } from '../../Redux/action/friendAction';

const UserWrapper = (props) => {
    const {userPageData, children } = props;
    const dispatch=useDispatch()
    const [friens,setfreinds]=useState(false)
    const [Request,setRequest]=useState(false)
    const {data}=useSelector(state=>state.user.user)
    useEffect(()=>{
        if(Object.keys(data).length !== 0 ){
        Object.values(data.friends).map((elm,i)=>{
            console.log("ss")
            if(elm.uid===userPageData.uid &&elm.request===true ){
                setfreinds(true)
            }
            else if(elm.uid===userPageData.uid &&elm.request===false){
                setRequest(true)
            }
            else {
               setRequest(false)
               setfreinds(false)
            }
        })
        }
    },[data])
    return (
        <div className="userpage">
            <div>
                <PageNav/>
            </div>
            <div className="UserUerNav"> 
            <div className="userData">
                <div className="Card"> 
                    <img className="userAvavtar" src={userPageData.avatar?userPageData.avatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"}></img>
                    <div className="NameSurname1">
                        <p>{userPageData.name} {userPageData.surname}</p>
                        <p className="age">{userPageData.age}</p>
                    </div>
                    <div>
                        {friens?<button className="follow btn btn-sm btn-danger" >Unfollow</button>:Request?<button className="btn btn-sm btn-warning follow ">Request</button>:
                            <button className="btn btn-sm btn-success follow" onClick={()=>
                                {
                                    dispatch(AddFriends(data.uid,userPageData.uid,userPageData.public))
                            }}>Follow</button>    
                        }
                        <br></br>
                    </div>
                    </div>   
                </div>
                <div className="UserNav">
                    <UserNav />
                <div className="public">
                {
                    !userPageData.public && <img className="PrivateImg" src="data:image/png;base64,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"></img>

                }
                </div>
                <div>
                    {
                        <div>
                            { userPageData.public && children}
                        </div>
                    }
                </div>    
            </div>    
        </div>
        </div>
    )
}

UserWrapper.propTypes = {
    userPageData: PropTypes.any.isRequired,
    children: PropTypes.node,
};

UserWrapper.defaultProps = {
    children: null,
}

export default UserWrapper;