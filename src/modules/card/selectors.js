// import { createSelector } from 'reselect';
export const getIsPaymentMethodReceived = state => state.card.isPaymentMethodReceived;
export const getCardNumber = (state) => state.card.cardNumber;
export const getCardExpiryDate = (state) => state.card.expiryDate;
export const getCardName = (state) => state.card.cardName;
export const getCardCvc = (state) => state.card.cvc;
