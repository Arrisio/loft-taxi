import React, {createContext} from "react";
import App from "./index";
import {render, screen, fireEvent} from "@testing-library/react";

const initTestQueries = () => {
    const {getByTestId, queryByTestId } = render(<App/>);
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
    beforeEach(() => {
        [getByTestId, queryByTestId] = initTestQueries();
        fireEvent.submit(getByTestId('formSignIn'), { target: { username: 'a', password: '33' } });
    })

    it("signin", () => {
        expect(queryByTestId("introPage")).toBeFalsy();
        expect(getByTestId("mainPage")).toBeTruthy();
    })

    it("signou", () => {
        fireEvent.click(getByTestId("btnSignOut"));
        expect(queryByTestId("introPage")).toBeTruthy();
        expect(queryByTestId("mainPage")).toBeFalsy();
    })
});
