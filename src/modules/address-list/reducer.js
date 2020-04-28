import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    fetchAddressListFailure,
    fetchAddressListRequest,
    fetchAddressListSuccess
} from "./actions-private";


const addresses = handleActions({
    [fetchAddressListRequest]: () => [],
    [fetchAddressListSuccess]: (_state, action) => action.payload.addresses,
    [fetchAddressListFailure]: () => [],
}, []);

const error = handleActions({
    [fetchAddressListRequest]: () => null,
    [fetchAddressListSuccess]: () => null,
    [fetchAddressListFailure]:(_state, action) => action.payload.error,
}, null);

export default combineReducers({
    addresses, error
})