import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    fetchRoutFailure,
    fetchRoutRequest,
    fetchRoutSuccess
} from "./actionsPrivate";

import { clearRoute } from './actionsPublic'

const route = handleActions({
    [clearRoute]: () => null,
    [fetchRoutRequest]: () => null,
    [fetchRoutSuccess]: (_state, action) => action.payload.route,
    [fetchRoutFailure]: () => null,
}, []);

const error = handleActions({
    [clearRoute]: () => null,
    [fetchRoutSuccess]: () => null,
    [fetchRoutSuccess]: () => null,
    [fetchRoutFailure]:(_state, action) => action.payload.error,
}, null);

export default combineReducers({
    route, error
})