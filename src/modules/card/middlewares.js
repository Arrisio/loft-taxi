// TODO Delete this file

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import {fetchCard, saveCard} from "./api";


export const cardMiddlware = store => next => action => {
    if (action.type === publicActions.saveCard.toString()) {
        store.dispatch(privateActions.saveCardRequest());

        saveCard(action.payload)
        .then(res => {
            if (!res.success) throw new Error('Save card error');

            store.dispatch(privateActions.saveCardSuccess(action.payload))
        })
        .catch(error => {
            console.log('save card error')
            console.log(error)
            store.dispatch(privateActions.saveCardFaliure(error))
        });
    }

    if (action.type === publicActions.fetchCard.toString()) {
        store.dispatch(privateActions.fetchCardRequest());

        fetchCard(action.payload)
            .then(res => {
                console.log('fetch card success1')
                console.log(res)
                store.dispatch(privateActions.fetchCardSuccess(res))
                console.log('fetch card success2')
                console.log(res)
            })
            .catch(error => {
                console.log('fetch card error')
                console.log(error)
                store.dispatch(privateActions.fetchCardFaliure(error))
            });
    }


    return next(action);
}

