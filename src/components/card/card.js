import { useState } from "react"
import Slider from "../slider/slider";

function Card(props){
    const [slider,setSlider]=useState(false)
    const [active,setActive]=useState('')
    console.log(props)
        if(props.photos!==undefined){
        return (<div className="col-md-12 row">
        {Object.values(props.photos).map((elm,i)=>{
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
        {slider && <Slider active={active} props={props.photos}/>}
        {slider && <button className="CloseSlider" onClick={()=>{setSlider(false)
        alert(false)}}>x</button>}
    </div>)
}
else{
    return <h1>No Photos</h1>
}
}

export default Card
