import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {
    saveCardFaliure,
    saveCardRequest,
    saveCardSuccess,
    fetchCardFaliure,
    fetchCardRequest,
    fetchCardSuccess
} from "./actions-private";


const cardNumber = handleActions({
    [saveCardSuccess]: (_state, action) => action.payload.cardNumber,

    [fetchCardFaliure]: () => null,
    [fetchCardRequest]: () => null,
    [fetchCardSuccess]: (_state, action) => action.payload.cardNumber,
}, null);

const expiryDate = handleActions({
    [saveCardSuccess]: (_state, action) => action.payload.expiryDate,

    [fetchCardFaliure]: () => null,
    [fetchCardRequest]: () => null,
    [fetchCardSuccess]: (_state, action) => action.payload.expiryDate,
}, null);

const cardName = handleActions({
    [saveCardSuccess]: (_state, action) => action.payload.cardName ,

    [fetchCardFaliure]: () => null,
    [fetchCardRequest]: () => null,
    [fetchCardSuccess]: (_state, action) => action.payload.cardName,
}, null);

const cvc = handleActions({
    [saveCardSuccess]: (_state, action) => action.payload.cvc,

    [fetchCardFaliure]: () => null,
    [fetchCardRequest]: () => null,
    [fetchCardSuccess]: (_state, action) => action.payload.cvc,
}, null);


export default combineReducers({
    cardName, cvc, expiryDate, cardNumber, //id
})