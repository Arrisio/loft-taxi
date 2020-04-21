import { combineReducers } from 'redux';
import { fork } from "redux-saga/effects";

import  { sagas  as authSagas, reducer as authReducer } from './auth';
import {sagas as cardSagas, reducer as cardReducer} from './card'

function* rootSaga() {
    yield fork(authSagas);
    yield fork(cardSagas);
}

const rootReducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
});

export {
    rootReducer,
    rootSaga
}