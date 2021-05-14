import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./slider.scss";

function Slider(props){
    const[index,setIndex]=useState(props.active);
    console.log(props)
    const[photos,setPhotos]=useState([])
    Object.values(props.props).map((elm,i)=>{
        if(photos.length<Object.values(props.props).length){
            photos.push({photo:elm.url,title:elm.title})
        }
    })
    
    const next=(index)=>{
        let a=index
        if(index===photos.length-1){
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
            a=(photos.length-1)
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
                    <img  className="active" src={photos[index].photo} />
                    <p className="title1">{photos[index].title}</p>
                </div>
                <div className="NextPrev">
                    <button className="btn btn-sm btn-success" onClick={()=>(prev(index))}>Prev</button>
                    <button className="btn btn-sm btn-success" onClick={()=>(next(index))}>Next</button>
                </div>
                <div className="Listdiv">
                    {
                        photos.map((elm,i)=>{
                            return (
                            <div key={i} className="listdiv">
                                <img className="list" src={elm.photo} onClick={()=>setIndex(i)} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Slider