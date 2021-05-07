import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageNav from '../navs/PageNav';
import {useSelector} from 'react-redux'
import Loading from '../loading/Loading';
import {useDispatch} from "react-redux"
import {changeImg} from "../../Redux/action/userAction"
import {saveImg} from "../../Redux/action/userAction"
import {closeImg} from "../../Redux/action/userAction"
import "./profile.scss" 

function Profile() {
	const {data,isFetching} = useSelector(state => state.user.user)
	const {startImg} = useSelector(state => state.user)
	const [img,setImg]=useState('')
	const [btn,setBtn]=useState(false)
	const dispatch=useDispatch()
	useEffect(()=>{
		console.log(data.avatar)
		dispatch(changeImg)
		dispatch(closeImg)
	},[data])
	return(
	<div>
		{isFetching?<Loading />:<div>
			<PageNav />
			<div>
				
				<div className="form-grup userPage">
				{startImg?
				<div class="spinner-border text-danger" role="status">
  					<span class="sr-only">Loading...</span>
				</div>:""
				}
				     <div className="img">
						<img src={data.avatar?data.avatar:"https://html5css.ru/w3css/img_avatar3.png" } className="avatar"></img>
						<div class="file-input">
						<input type="file" accept="image/x-png,image/jpeg"   id="file" class="file" onChange={(e)=>{
							setImg(e.target.files[0])
							setBtn(true)
							return dispatch(changeImg(e.target.files[0]))}}/>
						 <label for="file">+</label>
					</div>
					{btn?	
					<div className="btn_div">
						<button className="btn btn-success btn-sm" onClick={()=>{
							setBtn(false)
							dispatch(saveImg(img,data.uid))}}>save</button>
						<button className="btn btn-danger btn-sm" onClick={()=>{
							setBtn(false)
							dispatch(closeImg(data.avatar,data.uid))
						}}>Close</button>
					</div>:""}
					</div>
					
					{<p className="text-center">{data.name}</p>}
					 <p className="text-center">{data.surname}</p> 
				</div>
			</div>
		</div>}	
	</div>
	)
}
export default connect(r=>r)(Profile)