import {createAction} from 'redux-actions'

export const saveCardRequest = createAction('SAVE_CARD_REQUEST');
export const saveCardFaliure = createAction('SAVE_CARD_FAILURE');
export const saveCardSuccess = createAction('SAVE_CARD_SUCCESS');

export const fetchCardRequest = createAction('FETCH_CARD_REQUEST');
export const fetchCardFaliure = createAction('FETCH_CARD_FAILURE');
export const fetchCardSuccess = createAction('FETCH_CARD_SUCCESS');