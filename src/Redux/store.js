import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"

import thunk from "redux-thunk"
import {QuizReducer} from "./Reducer.js";

const rootReducer = combineReducers({mernQuize:ProductReducer});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)