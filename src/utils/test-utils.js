import {createStore} from "redux";
import {rootReducer} from "../modules";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import {runSaga} from "redux-saga";

export const renderWithProviders  = (children, store=createStore(rootReducer)) => {
    let rendered = render(
        <MemoryRouter>
            <Provider store={store}>{children}</Provider>
        </MemoryRouter>
    );

    return {
        ...rendered,
        store
    };
};

export async function recordSaga(saga, initialAction) {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action)
        },
        saga,
        initialAction
    ).done;

    return dispatched;
}