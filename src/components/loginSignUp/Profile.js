import React from 'react';
import { connect } from 'react-redux';
import PageNav from '../navs/PageNav';
// import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import Loading from '../loading/Loading';

function Profile(props) {
	const {data,isFetching} = useSelector(state => state.user.user)
	const{isRequesting}=useSelector(state=>state.user.userAuth)
	return(
	<div>
		{isFetching?<Loading />:<div>
			<PageNav />
			<div>
				<div className="form-grup userPage">
					<img src="https://html5css.ru/w3images/avatar2.png" className="avatar"></img>
					<p className="text-center">{data.name}</p>
					<p className="text-center">{data.surname}</p>
				</div>
			</div>
		</div>}	
	</div>
	)
}
export default connect(r=>r)(Profile)