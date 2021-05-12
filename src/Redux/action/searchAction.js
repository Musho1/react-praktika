import {db} from '../../firebase';
const startSearchUser=()=>{
    return {
        type:"startSearchUser"
    }
}
const endSearchUser=(users)=>{
    return{
        type:"endSearchUser",
        value:users
    }
}
export const searchGetUser=(data)=>{
    return{
        type:"searchGetUser",
        data:data,
    }
}
export const closeSearch=()=>{
    return {
        type:"closeSearch"
    }
} 
export const search=(text)=>{
    return (dispatch)=>{
        if(text.length>=2){
        dispatch(startSearchUser())
        db.ref("user").orderByChild("age").startAt("").on('value',function(searchUser){
            if(searchUser.val()===null){
                console.log('Email is not present');
            }
            else{
                text=text.toUpperCase()
                let  users=[]
                let index =text.length
                let name=""
                Object.values(searchUser.val()).map((elm,i)=>{
                    name=elm.name.toUpperCase()
                    if(name.substring(0,index)===text){
                       users.push(elm)
                    }
                })
                dispatch(endSearchUser(users))
            }
        })
    }
    }
}