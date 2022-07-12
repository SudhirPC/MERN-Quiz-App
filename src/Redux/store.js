import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"

import thunk from "redux-thunk"
import {QuizReducer} from "./reducer.js";

const rootReducer = combineReducers({mernQuize:QuizReducer});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)