import './App.css';
import React, { useEffect } from 'react';
import Routs from './components/routes/Routs';
import { isActiv } from './Redux/action/userAction';
import { useDispatch } from 'react-redux';
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isActiv());
	}, [])
	return (
			<Routs />
		)
}

export default App;
