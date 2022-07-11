import * as types from "./ActionType.js";
import Axios from "axios";


const fetchQuizRequest = (payload) => {
    return {
      type: types.FETCH_QUIZ_REQUEST,
      payload,
    }
  }
  const fetchQuizSuccess = (payload) => {
    return {
      type: types.FETCH_QUIZ_SUCCESS,
      payload,
    }
  }
  const fetchQuizFailure = (payload) => {
    return {
      type: types.FETCH_QUIZ_FAILURE,
      payload,
    }
  }

  const getCurrentQuizRequest = (payload) => {
    return {
      type: types.GET_CURRENT_QUIZ_REQUEST,
      payload,
    }
  }
  const getCurrentQuizSuccess = (payload) => {
    return {
      type: types.GET_CURRENT_QUIZ_SUCCESS,
      payload,
    }
  }
  const getCurrentQuizFailure = (payload) => {
    return {
      type: types.GET_CURRENT_QUIZ_FAILURE,
      payload,
    }
  }
  const getCountSuccess = (payload) => {
    return {
      type: types.GETCOUNTDATA,
      payload,
    }
  }
//   const getlogoutUser = (payload) => {
//     return {
//       type: types.LOGOUTUSER,
//       payload,
//     }
//   }




//---------- login user ----------

  export const loginUserName =(payload)=>{
    return {
      type:types.GETUSERNAME,
      payload
    }
  }
  export const loginUser=(payload)=>{
    return {
      type:types.GETUSERID,
      payload
    }
  }