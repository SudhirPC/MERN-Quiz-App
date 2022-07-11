import * as types from './ActionType.js'

const init = {
 loading: false,
 userId:"",
  error: '',
  userName:"",
  quiz:"",
  currentQuiz:[],
  count:"",
  
}

export const QuizReducer = (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    
    case types.FETCH_QUIZ_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        quiz: payload,
      }
    case types.FETCH_QUIZDATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case types.GET_CURRENT_QUIZ_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case types.GET_CURRENT_QUIZ_SUCCESS:
      return {
        ...state,
        currentQuiz:payload,
        error: '',
        loading: false,
      }
    case types.GET_CURRENT_QUIZ_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

      case types.GETCOUNTDATA:

        console.log("payload",payload)
  
        return {
          ...state,
          count: payload,
        }
   case types.GETUSERID:
      return {
        ...state,
        userId: payload,
      }

        case types.GETUSERNAME:
          return {
            ...state,
            userName:payload
          }
          case types.LOGOUTUSER:
            return {
              ...state,
              userId: "",
              userName:""
            }
    default:
      return state
  }
}
 