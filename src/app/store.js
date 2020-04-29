import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import  {rootReducer, rootSaga} from '../modules';
import {fetchRoute} from '../modules/route'

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) return undefined;
        else return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(err) {
        console.log(err);
    }
};


const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        loadStateFromLocalStorage(),
        compose(
            applyMiddleware(
                sagaMiddleware
                ),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    sagaMiddleware.run(rootSaga);

    store.subscribe(() => {
        saveStateToLocalStorage(store.getState());
    })

    return store;
};


export default createAppStore;