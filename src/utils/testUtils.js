import {createStore} from "redux";
import {rootReducer} from "../modules";
import {render} from "@testing-library/react";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import {runSaga} from "redux-saga";
import 'mutationobserver-shim';
import {MuiThemeProvider} from "@material-ui/core/styles";
import {theme} from "loft-taxi-mui-theme";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";


export const renderWithProviders = (children, store = createStore(rootReducer)) => {
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
export const renderWithTheme = (children) => {
    let rendered = render(
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                {children}
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>)
    return {...rendered}
}


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