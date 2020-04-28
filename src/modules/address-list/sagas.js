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
        console.log('adderesses')
        console.log(res)
        if (res.length < 1) throw new Error('no adderessed fetched from server')

        yield put(privateActions.fetchAddressListSuccess( res));

    } catch (error) {
        yield put(privateActions.fetchAddressListFailure({error: error.message}));
    }
}
