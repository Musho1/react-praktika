import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PageNav from "../navs/PageNav"
import {SavePhoto} from "../../Redux/action/photosAction"
import "./photos.scss"
import Slider from "../slider/slider"
import {AddDiv} from "../../Redux/action/photosAction"
import Card from "../card/card"
function Photos(){
    const dispatch=useDispatch()
    const [showPhoto,setShowPhoto]=useState("")
    const {addDiv}=useSelector(state=>state.photo)
    const {data} = useSelector(state => state.user.user)
    const {sliderPhotos}=useSelector(state=>(state.slider))
    const [showDiv,setShowDiv]=useState(false)
    const [slider,setSlider]=useState(false)
    const [imges,setImages]=useState("")
    const [title,setTitle]=useState("")
    useEffect(()=>{
        if(data.photos==undefined){
            setImages(false)
        }
        else{
            setImages(true)
        }
        if(!addDiv){
            setShowDiv(false)
        }

    })
    return(<div>
        <PageNav/>
        <div  className={slider?"opaciti":""} onClick={()=>setSlider(false)}>
            <h1 className="text-center">Photos</h1>
            <div className="fileDiv">
                <div className="file-input">
                    <input type="file" id="file" className="file" onChange={(e)=>{
                        setShowPhoto(e.target.files[0])
                        setShowDiv(true)
                        dispatch(AddDiv())
                    }
                    }/>
                    <label htmlfor="file">Select file</label>
                </div>
                  <input type="file" onChange={(e)=>{
                        setShowPhoto(e.target.files[0])
                        setShowDiv(true)
                        dispatch(AddDiv())
                    }
                    }></input>
            </div>    
            {showDiv?<div className="addphoto">
                    <img src={showPhoto?URL.createObjectURL(showPhoto):""} className="showImg"/>
                    <div>
                    <input className="form-control input"  placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                    <div className="showBtn">
                        <button className="btn btn-sm btn-success" onClick={()=>dispatch(SavePhoto(data.uid,showPhoto,title))}>Save</button>
                        <button className="btn btn-sm btn-danger" onClick={()=>{
                            setShowPhoto(false)
                            setShowDiv(false)
                            }}>Close</button>
                    </div>
                    </div>
                </div>:""
            }
        <div className="ImgDiv" className="col-md-12 row">  
            {  imges &&
                     <Card props={data.photos}/>
            }
        </div>     
        </div>
    </div>)
}
export default Photos