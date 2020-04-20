import React, {createContext} from "react";

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent,waitFor, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from "./index";


const initTestQueries = () => {
    const history = createMemoryHistory ();
    const {getByTestId, queryByTestId } = render(
        <Router history={history}>
            <App/>
        </Router>
        );
    return [getByTestId, queryByTestId]
}

describe("intro page", () => {
    let getByTestId, queryByTestId;
    beforeEach(() => {
        [getByTestId, queryByTestId] = initTestQueries()
    })

    it("renders without crashing", () => {
        expect(queryByTestId("mainPage")).toBeFalsy();
        expect(getByTestId("introPage")).toBeTruthy();
        expect(getByTestId("formSignIn")).toBeTruthy();
        expect(queryByTestId("formSignUp")).toBeFalsy();
    })

    it("can toggle to signup form", () => {
        fireEvent.click(getByTestId("linkGotoSignUp"));
        debugger
        expect(queryByTestId("formSignIn")).toBeFalsy();
        expect(getByTestId("formSignUp")).toBeTruthy();
    })

    it("can toggle to signin form", () => {
        fireEvent.click(getByTestId("linkGotoSignUp"));

        fireEvent.click(getByTestId("linkGotoSignIn"));
        expect(getByTestId("formSignIn")).toBeTruthy();
        expect(queryByTestId("formSignUp")).toBeFalsy();
    })
});

describe("auth", () => {
    let getByTestId, queryByTestId;
    beforeEach(async () => {
        [getByTestId, queryByTestId] = initTestQueries();
        fireEvent.submit(getByTestId('formSignIn'), { target: { username: 'test@df', password: '123' } });
    })

    it("signin", async () => {
        wait(() =>  expect(queryByTestId("introPage")).toBeFalsy());
        wait(() =>  expect(getByTestId("mainPage")).toBeTruthy());
    })

    it("signout", async () => {
            wait(() =>  fireEvent.click(getByTestId("btnSignOut")));
            wait(() =>  expect(queryByTestId("introPage")).toBeTruthy());
            wait(() =>  expect(queryByTestId("mainPage")).toBeFalsy());
        }
        )
    })

