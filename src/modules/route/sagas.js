import {takeLatest, put, call, fork} from "redux-saga/effects";

import * as publicActions from './actionsPublic';
import * as privateActions from './actionsPrivate';
import * as api from './api'


export default function* watcher() {
    yield takeLatest(publicActions.fetchRoute, fetchRoute);
}

export function* fetchRoute({payload}) {
    try {
        if (!payload.address1 || !payload.address2){
            yield put(publicActions.clearRoute)
            return
        }
        yield put(privateActions.fetchRoutRequest(payload));
        const res = yield call(api.fetchRout, payload);
        yield put(privateActions.fetchRoutSuccess({route:res}));

    } catch (error) {
        yield put(privateActions.fetchRoutFailure({error: error.message}));
    }
}
