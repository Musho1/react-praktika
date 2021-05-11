import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./slider.scss"
function Slider(active){
    const dispatch=useDispatch()
    const {sliderPhotos}=useSelector(state=>(state.slider))
    const {sliderTitle}=useSelector(state=>(state.slider))
    const[index,setIndex]=useState(active.active)
    useEffect(()=>{
        console.log(sliderPhotos)
    })
    const next=(index)=>{
        let a=index
        console.log(a)
        if(index===sliderPhotos.length-1){
            a=0
        }
        else{
        a=(index+1)
        }
        setIndex(a)
    }
    const prev=(index)=>{
        let a=index
        console.log(a)
        if(index===0){
            a=(sliderPhotos.length-1)
        }
        else{
        a=(index-1)
        }
        setIndex(a)
    }
    return(<div className="slider">
       <div className="activimg">
        <div>
            <img  className="active" src={sliderPhotos[index].photo} />
            <p className="title1">{sliderPhotos[index].title}</p>
        </div>
        <div className="NextPrev">
            <button className="btn btn-sm btn-success" onClick={()=>(prev(index))}>Prev</button>
            <button className="btn btn-sm btn-success" onClick={()=>(next(index))}>Next</button>
        </div>
        <div className="Listdiv">
            {
                sliderPhotos.map((elm,i)=>{
                    return (<div key={i} className="listdiv">
                       <img className="list" src={elm.photo} onClick={()=>setIndex(i)} ></img>
                    </div>)
                })
            }
        </div>
        <div>
        </div>
        </div>
    </div>)
}
export default Slider