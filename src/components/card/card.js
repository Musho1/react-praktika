import { useState } from "react"
import Slider from "../slider/slider";

function Card(props){
    const [slider,setSlider]=useState(false)
    const [active,setActive]=useState('')
    console.log(props.photos)
    return(<div>
        {slider? <Slider active={active}/> :""}
         <div  className="Border" onClick={(e)=>{
             e.stopPropagation();
             setSlider(true)
             setActive(props.index)}} 
        >
                                <img   src={props.img} className="images" />
                                <div className="title">
                                    <p >{props.title}</p>
                                </div>
                            </div>
    </div>)
}
export default Card
