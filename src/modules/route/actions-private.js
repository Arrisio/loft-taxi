import {createAction} from 'redux-actions'

export const fetchRoutRequest = createAction('FETCH_ROUTE_REQUEST');
export const fetchRoutFailure = createAction('FETCH_ROUTE_FAILURE');
export const fetchRoutSuccess = createAction('FETCH_ROUTE_SUCCESS');