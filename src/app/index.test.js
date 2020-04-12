import React, {createContext} from "react";
import App from "./index";
import {render, screen, fireEvent} from "@testing-library/react";


describe("Ent2end", () => {

    it("Инициализирована страница входа", () => {
        const {getByTestId, queryByTestId, getByText} = render(<App/>);
        expect(queryByTestId("mainPage")).toBeFalsy();
        expect(getByTestId("introPage")).toBeTruthy();
        expect(getByTestId("formSignIn")).toBeTruthy();
        expect(queryByTestId("formSignUp")).toBeFalsy();
    })

    it("Переход на страницу регистрации", () => {
        const {getByTestId, queryByTestId, getByText} = render(<App/>);
        fireEvent.click(getByTestId("linkGotoSignUp"));
        expect(queryByTestId("formSignIn")).toBeFalsy();
        expect(getByTestId("formSignUp")).toBeTruthy();
    })

    it("Переход на страницу Входа", () => {
        const {getByTestId, queryByTestId, getByText} = render(<App/>);
        fireEvent.click(getByTestId("linkGotoSignUp"));

        fireEvent.click(getByTestId("linkGotoSignIn"));
        expect(getByTestId("formSignIn")).toBeTruthy();
        expect(queryByTestId("formSignUp")).toBeFalsy();
    })

    it("Логинимся", () => {
        const {getByTestId, queryByTestId, getAllByText} = render(<App/>);
        fireEvent.submit(getByTestId('formSignIn'), {target: {username: 'a', password: '33'}});
        expect(queryByTestId("introPage")).toBeFalsy();
        expect(getByTestId("mainPage")).toBeTruthy();
    })

    it("вылогиниваемся", () => {
        const {getByTestId, queryByTestId, getAllByText} = render(<App/>);
        fireEvent.submit(getByTestId('formSignIn'), {target: {username: 'a', password: '33'}});
        fireEvent.click(getByTestId("btnSignOut"));
        expect(queryByTestId("introPage")).toBeTruthy();
        expect(queryByTestId("mainPage")).toBeFalsy();
    })
});
