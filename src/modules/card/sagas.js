import {takeLatest, put, call, fork} from "redux-saga/effects";

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import * as api from './api'


export default function* watcher() {
    yield takeLatest(publicActions.saveCard, saveCard);
    yield takeLatest(publicActions.fetchCard, fetchCard);
}


function* saveCard(action) {
    try {
        yield put(privateActions.saveCardRequest());
        const res = yield call(api.saveCard, action.payload);
        if (!res.success) throw new Error('Save card error');
        yield put(privateActions.saveCardSuccess({...action.payload, ...res}));

    } catch (error) {
        yield put(privateActions.saveCardFaliure(error));
    }
}


export function* fetchCard(action) {
    try {
        yield put(privateActions.fetchCardRequest());
        const res = yield call(api.fetchCard, action.payload);
        const newState = {...action.payload, ...res}
        yield put(privateActions.fetchCardSuccess(newState));

    } catch (error) {
        yield put(privateActions.fetchCardFaliure(error));
    }
}
