import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType"


let initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
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
        default:{
            return state;
        }
    }

}
