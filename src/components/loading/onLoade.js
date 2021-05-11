import {useState} from "react";
import { useSelector } from "react-redux";

function Onloade(){
    const {loading}=useSelector(state=>state.user)
    const [loaded, setLoaded] = useState(true)
    function onLoad() {
      if(loading==100){
          setLoaded(false)
      }
    }
    return loaded? <img onLoad={onLoad} src="http://beepeers.com/assets/images/commerces/default-image.jpg" /> :""
}
export default Onloade