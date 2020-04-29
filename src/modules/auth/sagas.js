import {takeLatest, put, call, fork, spawn} from "redux-saga/effects";

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import * as api from './api'

import {fetchCard} from '../card/sagas';
import {fetchAddressList} from '../address-list/sagas';

export default function* watcher() {
    yield takeLatest(publicActions.signIn, signIn);
    yield takeLatest(publicActions.signUp, signUp);
    yield takeLatest(publicActions.signOut, signOut);
}


export function* signIn(action) {
    try {
        yield put(privateActions.signInRequest());
        const res = yield call(api.signIn, action.payload);

        if (!res.success) throw new Error(res.error);

        yield put(privateActions.signInSuccess({...action.payload, ...res}));

        yield fork(fetchCard, {payload: {token: res.token}})
        yield fork(fetchAddressList)
    } catch (error) {
        yield put(privateActions.signInFaliure(error.message));
    }
}


export function* signUp(action) {
    try {
        yield put(privateActions.signUpRequest());
        const res = yield call(api.signUp, action.payload);
        if (!res.success) throw new Error(res.error);
        yield put(privateActions.signUpSuccess({...action.payload, ...res}));
        yield spawn(fetchCard, {payload: {token: res.token}})
        yield spawn(fetchAddressList)
    } catch (error) {

        yield put(privateActions.signUpFaliure({error: error.message}));
    }
}

function* signOut(action) {
    yield put(privateActions.signOutSuccess());
}