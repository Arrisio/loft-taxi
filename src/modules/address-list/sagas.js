import {takeLatest, put, call, fork} from "redux-saga/effects";

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import * as api from './api'
import {signIn} from "../auth/sagas";


export default function* watcher() {
    yield takeLatest(publicActions.fetchAddressList, fetchAddressList);
}

export function* fetchAddressList(action) {
    try {
        yield put(privateActions.fetchAddressListRequest());
        const res = yield call(api.fetchAddressList);
        const newState = {...action.payload, ...res}
        yield put(privateActions.fetchAddressListSuccess(newState));

    } catch (e) {
        yield put(privateActions.fetchAddressListFailure(e));
    }
}
