import React, {  useState } from 'react';
import PageNav from '../navs/PageNav';
import {useSelector} from 'react-redux'
import Loading from '../loading/Loading';
import {useDispatch} from "react-redux"
import {changeImg} from "../../Redux/action/userAction"
import {saveImg} from "../../Redux/action/userAction"
import {closeImg} from "../../Redux/action/userAction"
import "./profile.scss" 
import Setting from '../setting/setting';
import { useLocation} from 'react-router-dom';
function Profile(props) {
	const {data,isFetching} = useSelector(state => state.user.user)
	const {loading}=useSelector(state=>state.user)
	const {avatar}=useSelector(state=>(state.user))
	const [img,setImg]=useState('')
	const [btn,setBtn]=useState(false)
	const dispatch=useDispatch();
	const location = useLocation();
	const { pathname } = location;

	return(
	<div >
		{isFetching?<Loading />:<div>
			<PageNav />
			<div className="profil">
				<div className="form-grup userPage">
				     <div className="img">
					<div> 
						<img src={data.avatar?data.avatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"} className="avatar" />
						<div className="file-input">
						<input type="file" accept="image/x-png,image/jpeg"   id="file" className="file" onChange={(e)=>{
							setImg(e.target.files[0])
							setBtn(true)
							dispatch(changeImg(e.target.files[0]))}}/>
							
						 <label htmlFor="file">+</label>
					</div>
					
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
					<div className="NameSurname">
						<div className="text-center"><p className="text-center">{data.name} {data.surname}  </p><div className="Age"> {data.age}</div></div>
					</div>
					</div>
				</div>
			<div>
				{ pathname.includes('settings') && <Setting />}
			</div>
			<div className={props.className}>{props.children}</div>
			</div>
		</div>}	
	</div>
	)
}
export default Profile