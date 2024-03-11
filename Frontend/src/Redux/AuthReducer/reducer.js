import {  GET_LACTURE_REQUEST, GET_LACTURE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType"


let initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    lactures:[],
    courses:[]
  }

export const reducer =(state=initialState,{type,payload})=>{
    switch (type){
        case LOGIN_REQUEST:{
            return {...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            return {...state,isLoading:false,isAuth:true,token:payload.data.token,courses:payload.data.courses}
        }
        case LOGIN_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        case LOGOUT:{
            return {...state,isLoading:false,isAuth:false,token:""}
        }
        case GET_LACTURE_REQUEST:{
            return {...state, isLoading:true}

        }
        case GET_LACTURE_SUCCESS:{
            return {...state, isLoading:false, lactures:payload.data.lactures}
        }
        default:{
            return state;
        }
    }

}
