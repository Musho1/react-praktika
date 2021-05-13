import { useState } from "react"
import Slider from "../slider/slider";

function Card(props){
    const [slider,setSlider]=useState(false)
    const [active,setActive]=useState('')
    // return(<div>
    //     {slider? <Slider active={active}/> :""}
    //      <div  className="Border" onClick={(e)=>{
    //          e.stopPropagation();
    //          setSlider(true)
    //          setActive(props.index)}} 
    //     >
    //                             <img   src={props.img} className="images" />
    //                             <div className="title">
    //                                 <p >{props.title}</p>
    //                             </div>
    //                         </div>
    // </div>)
    return (<div className="col-md-12 row">
        {Object.values(props.props).map((elm,i)=>{
            return (
            <div key={i} className="Border" onClick={(e)=>{
                e.stopPropagation()
                setSlider(true)
                setActive(i)
            }}>
                <img src={elm.url} className="images"></img>
                <div className="title">
                    <p>{elm.title}</p>
                </div>
            </div>)
        })}
        {slider && <Slider active={active} props={props.props} />}
    </div>)
}

export default Card
