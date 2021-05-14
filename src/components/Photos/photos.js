import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PageNav from "../navs/PageNav"
import {SavePhoto} from "../../Redux/action/photosAction"
import "./photos.scss"
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
        <div   onClick={()=>setSlider(false)}>
            <h1 className="text-center">Photos</h1>
           <div className="PagesPhotos"> 
                <div className="fileDiv">
                    <div className="file-input2">
                        <input type="file" id="file1" className="file1" onChange={(e)=>{
                            setShowPhoto(e.target.files[0])
                            setShowDiv(true)
                            dispatch(AddDiv())
                        }
                        }/>
                        <label htmlfor="file1">Select file</label>
                    </div> 
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
            <div  className="col-md-12 row">  
                {  imges && <Card photos={data.photos}/>}
            </div>    
        </div>   
        </div>
    </div>)
}
export default Photos