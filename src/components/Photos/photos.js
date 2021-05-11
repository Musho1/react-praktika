import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PageNav from "../navs/PageNav"
import {SavePhoto} from "../../Redux/action/photosAction"
import "./photos.scss"
import Slider from "../slider/slider"
function Photos(){
    const [showPhoto,setShowPhoto]=useState("")
    const [show,setShow]=useState(false)
    const {data} = useSelector(state => state.user.user)
    const {loading}=useSelector(state=>state.photo)
    const {sliderPhotos}=useSelector(state=>(state.slider))
    const [showLoading,setShowLoading]=useState(false)
    const [slider,setSlider]=useState(false)
    const [imges,setImages]=useState("")
    const [title,setTitle]=useState("")
    const [active,setActive]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        
        if(data.photos==undefined){
            setImages(false)
        }
        else{
            setImages(true)
        }
        if(showPhoto!=""){
            setShow(true)
        }
        else {
            setShow(false)
        }
        if(loading==0){
			setShowLoading(true)
		}
		if(loading===100){
			setShowLoading(false)
            setShow(false)
		}
    })
    return(<div>
        <PageNav />
        {slider? <Slider active={active} /> :""}
        <div className="photos container">
            <h1>Photos</h1>
            <input type="file" onChange={(e)=>setShowPhoto(e.target.files[0])}/>{
                    showLoading?<progress value={loading} max="100"></progress>:""
            }
            {show?<div>
                    <img src={showPhoto?URL.createObjectURL(showPhoto):""} className="showImg"/>
                    <div>
                    <textarea className="form-control"  onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="showBtn">
                        <button className="btn btn-sm btn-success" onClick={()=>dispatch(SavePhoto(data.uid,showPhoto,title))}>Save</button>
                        <button className="btn btn-sm btn-danger" onClick={()=>{setShowPhoto("")}}>Close</button>
                    </div>
                    </div>
                </div>:""
            }
        <div className="ImgDiv">  
            {  imges? 
                
                Object.values(data.photos).map((elm,i)=>{
                    sliderPhotos.push(elm.url)
                    return <div key={i} className="Border"onClick={()=> {
                                                     setSlider(true)
                                                     setActive(elm.url)}} >
                                <img   src={elm.url} className="images" />
                                <div className="title">
                                    <p >{elm.title}</p>
                                </div>
                            </div>
                }):""
            }
        </div>     
        </div>
        
    </div>)
}
export default Photos