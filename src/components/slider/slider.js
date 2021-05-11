import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Next } from "../../Redux/action/sliderAction"
import "./slider.scss"
function Slider(active){
    const dispatch=useDispatch()
    const {sliderPhotos}=useSelector(state=>(state.slider))
    const[index,setIndex]=useState(sliderPhotos.indexOf(active.active))
    useEffect(()=>{
        console.log(active)
        console.log(sliderPhotos.indexOf(active.active))
    })
    return(<div className="slider">
        <div>
            <img  className="active" src={sliderPhotos[index]} />
        </div>
        <div>
            <button className="btn btn-sm btn-success" onClick={()=>(Next("ss"))}>Next</button>
        </div>
    </div>)
}
export default Slider