import {takeLatest, put, call, fork} from "redux-saga/effects";

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import * as api from './api'

import {fetchCard} from '../card/sagas';

export default function* watcher() {
    yield takeLatest(publicActions.signIn, signIn);
    yield takeLatest(publicActions.signUp, signIn);
    yield takeLatest(publicActions.signOut, signOut);
}


export function* signIn(action) {
    try {
        yield put(privateActions.signInRequest());
        const res = yield call(api.signIn, action.payload);
        // console.log(res)
        if (!res.success) throw new Error('Authentication error');
        yield put(privateActions.signInSuccess({...action.payload, ...res}));

        yield fork(fetchCard, {payload:{token: res.token}})
    } catch (error) {
        yield put(privateActions.signInFaliure(error));
    }
}


export function* signUp(action) {
    try {
        yield put(privateActions.signInRequest());
        const res = yield call(api.signUp, action.payload);
        if (!res.success) throw new Error('Registration error');
        yield put(privateActions.signUpSuccess({...action.payload, ...res}));

    } catch (error) {
        yield put(privateActions.signUpFaliure(error));
    }
}

function* signOut(action) {
    yield put(privateActions.signOutSuccess());
}