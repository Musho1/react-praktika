import './App.css';
import React, { useEffect } from 'react';
import Routs from './components/routes/Routs';
import { isActiv } from './Redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/loading/Loading';

function App() {
	const dispatch = useDispatch();
    const { isRequesting }=useSelector(state=>{return(state.user.userAuth)})


	useEffect(() => {
		dispatch(isActiv());
	}, []);

	return (
		<>
			{isRequesting && <Loading/>}
			{!isRequesting && <Routs />}
		</>
		)
}

export default App;
