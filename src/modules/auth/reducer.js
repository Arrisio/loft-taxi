import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    signUpSuccess,
    signInSuccess,
    signInFaliure,
    signUpFaliure,
    signInRequest,
    signUpRequest,
    signOutSuccess,
} from "./actions-private";

const isLoggedIn = handleActions({
    [signInSuccess]: () => true,
    [signInFaliure]: () => false,

    [signUpSuccess]: () => true,
    [signUpFaliure]: () => false,

    [signOutSuccess]: () => false,
}, false);

const token = handleActions({
    [signInRequest]: () => null,
    [signInSuccess]: (_state, action) => action.payload.token,
    [signInFaliure]: () => null,

    [signUpRequest]: () => null,
    [signUpSuccess]: (_state, action) => action.payload.token,
    [signUpFaliure]: () => null,

    [signOutSuccess]: () => null,
}, '');

const email = handleActions({
    [signInRequest]: () => null,
    [signInSuccess]: (_state, action) => action.payload.email,
    [signInFaliure]: () => null,

    [signUpRequest]: () => null,
    [signUpSuccess]: (_state, action) => action.payload.email,
    [signUpFaliure]: () => null,

    [signOutSuccess]: () => null,
}, null);

const error = handleActions({
    [signInRequest]: () => null,
    [signInSuccess]: () => null,
    [signInFaliure]: (_state, action) => action.payload.error,

    [signUpRequest]: () => null,
    [signUpSuccess]: () => null,
    [signUpFaliure]: (_state, action) => action.payload.error,

    [signOutSuccess]: () => null,
}, null);


export default combineReducers({
    isLoggedIn,
    token,
    email,
    error
})