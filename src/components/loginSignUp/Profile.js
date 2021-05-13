import React, { useEffect, useState } from 'react';
import PageNav from '../navs/PageNav';
import {useSelector} from 'react-redux'
import Loading from '../loading/Loading';
import {useDispatch} from "react-redux"
import {changeImg} from "../../Redux/action/userAction"
import {saveImg} from "../../Redux/action/userAction"
import {closeImg} from "../../Redux/action/userAction"
import "./profile.scss" 
import Onloade from '../loading/onLoade';
import Setting from '../setting/setting';
import UserPage from '../userpage/userPage';
import { useLocation, useParams } from 'react-router-dom';


function Profile() {
	const {data,isFetching} = useSelector(state => state.user.user)
	const {loading}=useSelector(state=>state.user)
	const {avatar}=useSelector(state=>(state.user))
	const [img,setImg]=useState('')
	const [btn,setBtn]=useState(false)
	const [startImg,setStartImg]=useState(false)
	const dispatch=useDispatch();
	const location = useLocation();
	const { pathname } = location;
	const params = useParams();
	// useEffect(()=>{
	// 	if(loading==0){
	// 		setStartImg(true)
	// 	}
	// 	if(loading===100){
	// 		setStartImg(false)
	// 	}
	// },[])
	return(
	<div >
		{isFetching?<Loading />:<div>
			<PageNav />
			<div className="profil">
				<div className="form-grup userPage">
				{startImg? 
					<div>
						<progress value={loading} max="100"></progress>
					</div>:""
				}
				     <div className="img">
						 
						 <Onloade/>
						<img src={data.avatar?data.avatar:"https://html5css.ru/w3css/img_avatar3.png"} className="avatar"></img>
						<div className="file-input">
						<input type="file" accept="image/x-png,image/jpeg"   id="file" className="file" onChange={(e)=>{
							setImg(e.target.files[0])
							setBtn(true)
							dispatch(changeImg(e.target.files[0]))}}/>
						 <label for="file">+</label>
					</div>
					{btn?	
					<div className="btn_div">
						<button className="btn btn-success btn-sm" onClick={()=>{
							setBtn(false)
							dispatch(saveImg(img,data.uid,data,loading))}}>save</button>
						<button className="btn btn-danger btn-sm" onClick={()=>{
							setBtn(false)
							dispatch(closeImg(avatar))
						}}>Close</button>
					</div>:""}
					</div>
					 <p className="text-center">{data.surname} {data.name}</p> 
				</div>
			<div>
			{ pathname.includes('settings') && <Setting />}
			</div>
			</div>
		</div>}	
	</div>
	)
}
export default Profile