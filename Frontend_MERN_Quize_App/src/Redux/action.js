import * as types from "./actiontype.js";
import Axios from "axios";
import axios from "axios";

// Create quiz in redux store
export const quizRequest = () => {
  return {
    type: types.CREATE_QUIZ_REQUEST,
  };
};

export const quizSuccess = (quiz) => {
  console.log("hello",quiz)
  return {
    type: types.CREATE_QUIZ_SUCCESS,
    payload: quiz,
  };
};

export const quizFailure = (error) => {
  return {
    type: types.CREATE_QUIZ_FAILURE,
    payload: error,
  };
};


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
  export const postQuizObj = (obj) => (dispatch) => {
    // console.log(obj);
    axios
      .post("http://localhost:3755/admin", obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // ----------------------------- fetching quiz data subject wise -------------

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
  export const fetchQuizDataFrombackend = ()=>(dispatch)=> {
    axios
      .get("http://localhost:3755/api/quiz")
      .then((res) => dispatch(fetchQuizSuccess (res.data)))
      .catch((err) => console.log(err));
  };