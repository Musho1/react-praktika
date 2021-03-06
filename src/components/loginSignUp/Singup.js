import { useState } from "react";
import  firebase from 'firebase';
import SignNav from "../navs/SignNav";
import {db} from "../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Singup(){
    const [send,setSend]=useState(true)
    const[error,setError]=useState(0)
    const history = useHistory();
    const [user,setUser]=useState({
        Email:{value:"", errorMsg:'', errorBorderClass:true},
        Password:{value:"", errorMsg:'', errorBorder:true},
        Name:{value:"", errorMsg:'', errorBorder:true},
        Surname:{value:"", errorMsg:'', errorBorder:true},
        Age:{value:"", errorMsg:'', errorBorder:true},
    })
    const [errorMsg,setErrorMsg]=useState("")
    const dispatch=useDispatch()
    const [sendUser,setSendUser]=useState({name:"",surname:"",age:"",password:"",email:"", avatar: "https://firebasestorage.googleapis.com/v0/b/praktika-8350c.appspot.com/o/images%2FBYidAmlHTcdyOOTm8SZPfGUaAj93?alt=media&token=e0487152-fd76-424a-ab68-94b4270f90e2", photos:[], friends:[''],public:true})
    const [start,setStart]=useState(false)

    const Save=function(user) { 
        Object.values(user).map((elm,i)=>{
            console.log(elm)
           if(elm.errorMsg!==""){
              setError(error+1)
              setSend(false)
           }
       })
     Object.values(user).map((elm,i)=>{
         if(elm.value==="" ||elm.errorMsg!=="" ||elm.errorBorderClass===false){
            setSend(false)
         }
     })
     if(error===0){
        setSend(true)
     }


        if(send){
            firebase.auth().createUserWithEmailAndPassword(user.Email.value,user.Password.value)
            .then(Response=>{
                setStart(true)
                db.ref(`/user/${Response.user.uid}`).set({...sendUser, uid: Response.user.uid})
                if(!firebase.auth().currentUser.emailVerified){
                        firebase.auth().currentUser.sendEmailVerification()
                        .then(()=>{
                            console.log("send email cod")
                        })  
                        // dispatch(errorLogIn("ss")) 
                    }
                
                 history.push("/")
                 setUser({ Email:{value:"", errorMsg:'', errorBorderClass:true},
                 Password:{value:"", errorMsg:'', errorBorder:true},
                 Name:{value:"", errorMsg:'', errorBorder:true},
                 Surname:{value:"", errorMsg:'', errorBorder:true},
                 Age:{value:"", errorMsg:'', errorBorder:true},})
            })
            .catch(error=>{ 
               
            })
        }
    }
    
    const emailValid=function(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validationName=function(temp,i){
        // setSend(true)
        let item={...user}
        console.log(temp)
        if(i===0 && temp===""){
            item.Email.errorMsg="The Email is not filled in"
            item.Email.errorBorderClass="error"
        }
        else if(i===0){
            if(!emailValid(temp)){
                item.Email.errorMsg="The email address is badly formatted"
                item.Email.errorBorderClass="error"
                setSend(false)
            }
            else {
                item.Email.errorMsg=""
                item.Email.errorBorderClass=""
                item.Email.value=temp
                setSendUser({...sendUser,email:temp})
            }
        }
        if(i===1 && temp===""){
            item.Password.errorBorderClass="error"
            item.Password.errorMsg="The Password is not filled in`  "
            setSend(false)
        }
        else if(i===1 && temp.length<6){
            item.Password.errorMsg="password must be more than 6"
            item.Password.errorBorderClass="error"
            setSend(false)
        }
        else if(i===1) {
            item.Password.errorMsg=""
            item.Password.errorBorderClass=""
            item.Password.value=temp
            setSendUser({...sendUser,password:temp})
        }

        if(i===2 && temp===""){
            item.Name.errorBorderClass="error"
            item.Name.errorMsg="The Name is not filled in "
            setSend(false)
        }
        else if(i===2){
            item.Name.errorBorderClass=""
            item.Name.errorMsg=""
            item.Name.value=temp
            setSendUser({...sendUser,name:temp})
        }
        if(i===3 && temp===""){
            item.Surname.errorBorderClass="error"
            setSend(false)
            item.Surname.errorMsg="The Surname is not filled in"
        }
        else if(i===3) {
            item.Surname.errorBorderClass=""
            item.Surname.errorMsg=""
            item.Surname.value=temp
            setSendUser({...sendUser,surname:temp})
        }
        if(i===4 && temp===""){
            item.Age.errorBorderClass="error"
            item.Age.errorMsg="The Surname is not filled in`  "
            setSend(false)
        }
        else if(i===4 && isNaN(temp)){
            item.Age.errorBorderClass="error"
            item.Age.errorMsg="age shuld be Number"
            setSend(false)
        }
        else if(i===4){
            item.Age.errorBorderClass=""
            item.Age.errorMsg=""
            item.Age.value=temp
            setSendUser({...sendUser,age:temp})
        }
        if(send===true){
            setUser({...item})
        }
        else if(send===false){
            setStart(false)
        }
        
    }
    return(
        <div>
            <SignNav />
           <div className="LoginPage">
            <div className="col-md-3 Login">
                <div className="form-grup">
                    <label>Email</label>
                    <input  className={`form-control ${user.Email.errorBorderClass}`}  onBlur={(e)=>validationName(e.target.value,0)}/>
                    <p className="text-danger">{user.Email.errorMsg}</p>
                </div>
                <div className="form-grup">
                    <label>Password</label>
                    <input className={`form-control ${user.Password.errorBorderClass}`}  onBlur={(e)=>validationName(e.target.value,1)}/>
                    <p className="text-danger">{user.Password.errorMsg}</p>
                </div>
                <div className="form-grup">
                    <label>Name</label>
                    <input  className={`form-control ${user.Name.errorBorderClass}`} onBlur={(e)=>validationName(e.target.value,2)}/>
                    <p className="text-danger">{user.Name.errorMsg}</p>
                </div>
                <div className="form-grup">
                    <label>Surname</label>
                    <input  className={`form-control ${user.Surname.errorBorderClass}`} onBlur={(e)=>validationName(e.target.value,3)}/>
                    <p className="text-danger">{user.Surname.errorMsg}</p>
                </div>
                <div className="form-grup">
                    <label>age</label>
                    <input className={`form-control ${user.Age.errorBorderClass}`} onBlur={(e)=>validationName(e.target.value,4)}/>
                    <p className="text-danger">{user.Age.errorMsg}</p>
                </div>
                <div>
                    <br />
                    <button disabled={start} className="btn btn-success btn-sm" onClick={()=>Save(user)}>
                        Sign up
                        {start ?<div className="spinner-border text-danger spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                        </div>:<div></div>}
                    </button>
                </div>
                <div>
                    <p className="text-danger">{errorMsg}</p>
                </div>
            </div>
        </div>
       </div> 
    )
}
export default Singup