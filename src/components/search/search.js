import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../Redux/action/searchAction";
import { useHistory } from 'react-router-dom';

import "./search.scss";
function Search(){
    const history = useHistory();
    const dispatch=useDispatch();
    const {searchUser}=useSelector(state=>state.search);
    const [isSearch,setIsSearch]=useState(false);
    return (
        <div>
            <div className="box">
                <div className="container-4">
                    <input type="search" id="search"  placeholder="Search..." onChange={(e)=>{
                        dispatch(search(e.target.value))
                        if(e.target.value.length>=2){
                            setIsSearch(true)
                        }
                        else if(e.target.value.length<2){
                            setIsSearch(false)
                        }
                    }
                }/>
                </div>
        </div> 
        {isSearch &&
            <div className="SearchBlock" >
                {
                    Object.values(searchUser).map((elm,i)=>{
                        if(elm.avatar===""){

                        }
                        return (
                            <div key={i} className="SerchUser" onClick={() => history.push(`/user/${elm.uid}`)} >
                                <div> 
                                    <img src={elm.avatar?elm.avatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"} className="SerchAvatar"/>
                                </div>
                                <div>
                                    <p>{elm.name} {elm.surname}</p>
                                </div>    
                            </div>
                        )
                    })
                }
            </div>
    }   
  </div>
    )
}
export default Search