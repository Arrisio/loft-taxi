import {takeLatest, put, call, fork} from "redux-saga/effects";

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import * as api from './api'


export default function* watcher() {
    yield takeLatest(publicActions.fetchRout, fetchRoute);
}

export function* fetchRoute({payload}) {
    try {
        yield put(privateActions.fetchRoutRequest(payload));
        const res = yield call(api.fetchRout, payload);
        const newState = {route:res}
        yield put(privateActions.fetchRoutSuccess(newState));

    } catch (e) {
        yield put(privateActions.fetchRoutFailure(e));
    }
}
