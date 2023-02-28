import * as types from "./actiontype.js";
import axios from "axios";

// Create quiz in redux store
export const quizRequest = () => {
  return {
    type: types.CREATE_QUIZ_REQUEST,
  };
};

export const quizSuccess = (quiz) => {
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
  };
};
const getCurrentQuizSuccess = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_SUCCESS,
    payload,
  };
};
const getCurrentQuizFailure = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_FAILURE,
    payload,
  };
};
const getCountSuccess = (payload) => {
  return {
    type: types.GETCOUNTDATA,
    payload,
  };
};

//---------- login user ----------

export const loginUserName = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  };
};
export const loginUser = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  };
};

export const Logouthandleraction = (payload) => {
  return {
    type: types.LOGOUTUSER,
    payload,
  };
};

export const loginAdminId = (payload) => {
  return {
    type: types.GETADMINID,
    payload,
  };
};
export const loginAdminName = (payload) => {
  return {
    type: types.GETADMINNAME,
    payload,
  };
};

// ----------------------- action creator function for  details of user  for admin page ---------------

const getAllUserDataRequest = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_REQUEST,
    payload,
  };
};

const getAllUserDataSuccess = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_SUCCESS,
    payload,
  };
};

const getAllUserDataFailure = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_FAILURE,
    payload,
  };
};

// ----------------------- details of user  for admin page  and delete user by admin ---------------

export const getAllUserDataFromBackend = (payload) => (dispatch) => {
  dispatch(getAllUserDataRequest());
  axios
    .get("https://mern-quiz-server-sudhir.onrender.com/getuser")
    .then((res) => {
      dispatch(getAllUserDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllUserDataFailure());
    });
};

export const deleteUserByAdmin = (payload) => (dispatch) => {
  axios
    .delete(`https://mern-quiz-server-sudhir.onrender.com/${payload}`)
    .then((response) => {
      dispatch(getAllUserDataFromBackend());
    })
    .catch((error) => {
      console.log("error");
    });
};

// ----------post quiz--------------

export const postQuizObj = (obj) => (dispatch) => {
  axios
    .post("https://mern-quiz-server-sudhir.onrender.com/admin", obj)
    .then((res) => {
     
    })
    .catch((err) => {
      
    });
};

// ----------------------------- fetching quiz data subject wise -------------

const fetchQuizRequest = (payload) => {
  return {
    type: types.FETCH_QUIZ_REQUEST,
    payload,
  };
};
const fetchQuizSuccess = (payload) => {
  return {
    type: types.FETCH_QUIZ_SUCCESS,
    payload,
  };
};
const fetchQuizFailure = (payload) => {
  return {
    type: types.FETCH_QUIZ_FAILURE,
    payload,
  };
};
export const fetchQuizDataFrombackend = () => (dispatch) => {
  axios
    .get("https://mern-quiz-server-sudhir.onrender.com/api/quiz")
    .then((res) => dispatch(fetchQuizSuccess(res.data)))
    .catch((err) => console.log(err));
};

export const getQuiz = (params) => (dispatch) => {
  axios
    .get(`https://mern-quiz-server-sudhir.onrender.com/quiz/${params.id}`)
    .then((res) => {
    
      dispatch(fetchQuizSuccess(res.data));
    })
    .catch((err) => {
    });
};

//------------posting the user quiz result ------------

//  -----------posting user result ------------

export const postUserResult = (ans) => {
  return {
    type: types.SET_USER_RESULT_SUCCESS,
    payload: ans,
  };
};

// ------action creator function and axios function =-------

const postUserResultRequest = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultSuccess = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultFailure = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
export const postQuizResult = (obj) => (dispatch) => {
  const { quizId, userId, quizResult } = obj;
  dispatch(postUserResultRequest());
  axios
    .post(`https://mern-quiz-server-sudhir.onrender.com/userResult/${userId}`, obj)
    .then((res) => {
      dispatch(postUserResultSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postUserResultFailure(err));
    });
};
