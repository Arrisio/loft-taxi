import { createStore, compose, applyMiddleware } from 'redux';
import { authMiddlware } from '../modules/auth';
import { cardMiddlware } from '../modules/card';
import rootReducer from '../modules';


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
    const store = createStore(
        rootReducer,
        loadStateFromLocalStorage(),
        compose(
            applyMiddleware(
                authMiddlware,
                cardMiddlware,
                ),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    store.subscribe(() => {
        saveStateToLocalStorage(store.getState());
    })

    return store;
};


export default createAppStore;