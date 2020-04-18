import * as api from '../../api';

import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import {fetchCard} from '../card/actions-public';


export const authMiddlware = store => next => action => {
    if (action.type === publicActions.signIn.toString()) {
        privateActions.signInRequest();

        api.signIn(action.payload)
        .then(res => {
            if (!res.success) throw new Error('Authentication error');
            console.log('sign in response')
            console.log(res)
            store.dispatch(privateActions.signInSuccess(res))
            store.dispatch(fetchCard({token: res.token}))
        })
        .catch(error => {
            store.dispatch(privateActions.signInFaliure(error))
        });
    }

    if (action.type === publicActions.signUp.toString()) {
        privateActions.signUpRequest();
        console.log(action.payload)
        api.signUp(action.payload)
            .then(res => {
                console.log(res)
                if (!res.success) throw new Error('Registration error');

                store.dispatch(privateActions.signUpSuccess(res))
                store.dispatch(fetchCard({token: res.token}))
            })
            .catch(error => store.dispatch(privateActions.signUpFaliure(error)));
    }

    if (action.type === publicActions.signOut.toString()) {
        store.dispatch(privateActions.signOutSuccess())
    }

    return next(action);
}

