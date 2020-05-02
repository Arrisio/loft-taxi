import {combineReducers} from 'redux';
import {fork} from "redux-saga/effects";

import {sagas as authSagas, reducer as authReducer} from './auth';
import {sagas as cardSagas, reducer as cardReducer} from './card'
import {sagas as addressListSagas, reducer as addressListReducer} from './addressList'
import {sagas as routeSaga, reducer as routeReducer} from './route'

function* rootSaga() {
    yield fork(authSagas);
    yield fork(cardSagas);
    yield fork(addressListSagas);
    yield fork(routeSaga);
}

const rootReducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    addressList: addressListReducer,
    route: routeReducer,
});

export {
    rootReducer,
    rootSaga
}