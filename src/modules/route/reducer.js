import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    fetchRoutFailure,
    fetchRoutRequest,
    fetchRoutSuccess
} from "./actions-private";


const route = handleActions({
    [fetchRoutRequest]: () => null,
    [fetchRoutSuccess]: (_state, action) => action.payload.route,
    [fetchRoutFailure]: () => null,
}, []);

const error = handleActions({
    [fetchRoutSuccess]: () => null,
    [fetchRoutSuccess]: () => null,
    [fetchRoutFailure]:(_state, action) => action.payload.error,
}, null);

export default combineReducers({
    route, error
})