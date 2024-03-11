import axios from "axios"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType"

export const registerNewUser=(data,navigate)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post(`https://ideaclan-5twr.onrender.com/user/register`,data)
    .then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS,payload:res})
        navigate("/")
    })
}

export const LoginUser = (data,navigate)=> (dispatch)=> {
    dispatch({type:LOGIN_REQUEST})
    return (axios.post(`https://ideaclan-5twr.onrender.com/user/login`,data)
    .then((res)=>{
       if(res.data.role==="admin"){
        console.log(res)
           dispatch({type:LOGIN_SUCCESS,payload:res})
        return navigate("/admin-dashboard")
       }
        dispatch({type:LOGIN_SUCCESS,payload:res})
        navigate("/")
    }))
}

export const logout =(dispatch)=>{
    dispatch({type:LOGOUT})
}