import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useDispatch, useSelector } from "react-redux";
import { isPublic } from '../../Redux/action/settingAction';
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const dispatch=useDispatch()
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(isPublic(state))
  };
  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
