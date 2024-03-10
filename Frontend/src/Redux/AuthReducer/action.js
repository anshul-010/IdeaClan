import axios from "axios"
import { LOGIN_SUCCESS, LOGOUT } from "../actionType"

export const registerNewUser=(data,navigate)=>(dispatch)=>{
    axios.post(`https://ideaclan-5twr.onrender.com/user/register`,data)
    .then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS,payload:res})
        navigate("/")
    })
}

export const LoginUser = (data,navigate)=> (dispatch)=> {
    axios.post(`https://ideaclan-5twr.onrender.com/user/login`,data)
    .then((res)=>{
       if(res.data.role==="admin"){
        console.log(res)
           dispatch({type:LOGIN_SUCCESS,payload:res})
        return navigate("/admin-dashboard")
       }
        dispatch({type:LOGIN_SUCCESS,payload:res})
        navigate("/")
    })
}

export const logout =(navigate)=>(dispatch)=>{
    dispatch({type:LOGOUT})
    navigate("/login")
}