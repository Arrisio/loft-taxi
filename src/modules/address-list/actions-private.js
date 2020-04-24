import {createAction} from 'redux-actions'

export const fetchAddressListRequest = createAction('FETCH_ADDRESSLIST_REQUEST');
export const fetchAddressListFailure = createAction('FETCH_ADDRESSLIST_FAILURE');
export const fetchAddressListSuccess = createAction('FETCH_ADDRESSLIST_SUCCESS');