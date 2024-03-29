import axios from "axios"
import { GET_LACTURE_REQUEST, GET_LACTURE_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType"

const apiUrl = import.meta.env.VITE_API_URL;

export const registerNewUser=(data,navigate)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post(`${apiUrl}/user/register`,data)
    .then((res)=>{
        console.log(res)
        dispatch({type:LOGIN_SUCCESS,payload:res})
        navigate("/")
    })
}

export const LoginUser = (data,navigate)=> (dispatch)=> {
    dispatch({type:LOGIN_REQUEST})
    return (axios.post(`${apiUrl}/user/login`,data)
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


export const getLactures=(token)=>(dispatch)=>{
    dispatch({type:GET_LACTURE_REQUEST})
    axios.get(`${apiUrl}/lacture/get-lacture`,{
        headers: {
          Authorization: `${token}`
        }
      })
    .then((res)=>{
        dispatch({type:GET_LACTURE_SUCCESS,payload:res})
    })
}

export const logout =(dispatch)=>{
    dispatch({type:LOGOUT})
}