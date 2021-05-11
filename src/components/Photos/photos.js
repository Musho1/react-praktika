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
        if(showPhoto!="" && loading!==100){
            setShow(true)
        }
        else if(loading==100){
            setShow(false)
        }
        else {
            setShow(false)
        }
        if(loading===0){
			setShowLoading(true)
		}
		if(loading===100){
			setShowLoading(false)
            setShow(false)
		}
    })
    return(<div>
        <PageNav/>
        {slider? <Slider active={active} /> :""}
        <div  className={slider?"opaciti":""} onClick={()=>setSlider(false)}>
            <h1 className="text-center">Photos</h1>
            <div className="fileDiv">
                <div class="file-input">
                    <input type="file" id="file" class="file" onChange={(e)=>setShowPhoto(e.target.files[0])}/>
                    <label for="file">Select file</label>
                </div>
            </div>    
                {
                    showLoading?<progress value={loading} max="100"></progress>:""
                }
            {show?<div className="addphoto">
                    <img src={showPhoto?URL.createObjectURL(showPhoto):""} className="showImg"/>
                    <div>
                    <input className="form-control input"  placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="showBtn">
                        <button className="btn btn-sm btn-success" onClick={()=>dispatch(SavePhoto(data.uid,showPhoto,title))}>Save</button>
                        <button className="btn btn-sm btn-danger" onClick={()=>{
                            setShowPhoto(false)
                            }}>Close</button>
                    </div>
                    </div>
                </div>:""
            }
        <div className="ImgDiv" class="col-md-12 row">  
            {  imges? 
                
                Object.values(data.photos).map((elm,i)=>{
                  if(!sliderPhotos.includes({photo:elm.url,title:elm.title})&& sliderPhotos.length< Object.values(data.photos).length){
                        sliderPhotos.push({photo:elm.url,title:elm.title})
                    }
                    if(elm.title.length>=10){
                        elm.title=elm.title.substr(0,10)+"..."
                    }
                    return <div key={i} className="Border"onClick={(e)=> {
                                                    e.stopPropagation();
                                                     setSlider(true)
                                                     setActive(i)}} >
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