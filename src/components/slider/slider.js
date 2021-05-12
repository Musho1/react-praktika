import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./slider.scss";

function Slider(active){
    const {sliderPhotos}=useSelector(state=>(state.slider));
    const {photos}=useSelector(state=>state.user.user.data)
    const[index,setIndex]=useState(active.active);
    const next=(index)=>{
        let a=index
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
        if(index===0){
            a=(sliderPhotos.length-1)
        }
        else{
        a=(index-1)
        }
        setIndex(a)
    };
    return (
        <div className="slider">
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
                        Object.values(photos).map((elm,i)=>{
                            return (
                            <div key={i} className="listdiv">
                                <img className="list" src={elm.url} onClick={()=>setIndex(i)} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Slider