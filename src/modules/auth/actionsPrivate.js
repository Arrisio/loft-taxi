import {createAction} from 'redux-actions'

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInFaliure = createAction('SIGN_IN_FAILURE');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpFaliure = createAction('SIGN_UP_FAILURE');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');