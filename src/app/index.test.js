import React, {createContext} from "react";
import App from "./index";
// import AuthCtx from '/app/auth';
// import AuthCtx from "../../app/auth"
import {render, screen, fireEvent} from "@testing-library/react";

// const signOutHandler = jest.fn();


describe("Ent2end тестирование", () => {
    // const {getByTestId, queryByTestId, getByText} = render(<App/>);

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
        const btn = getByTestId('btnsignin');
        console.log(btn)
        fireEvent.click(btn);
        // fireEvent(
        //     queryByText("Войти", {selector: 'submit'}),
        //     new MouseEvent('click', {
        //         bubbles: true,
        //         cancelable: true,
        //     })
        // )
        // console.log(btn)
        // fireEvent.click(btn);
        // fireEvent.click(getByText("Войти", {selector: 'button'}));
        expect(queryByTestId("introPage")).toBeFalsy();
        expect(getByTestId("mainPage")).toBeTruthy();
    })
    it("Отображаем карту", () => {
        const {getByTestId, queryByTestId, getAllByText} = render(<App/>);
        fireEvent.click(getByTestId("btnGotoMap"));
        expect(getByTestId("map")).toBeTruthy();
    })
    it("Отображаем профиль", () => {
        fireEvent.click(getByTestId("btnGotoProfile"));
        expect(getByTestId("profile")).toBeTruthy();
    })
    it("вылогиниваемся", () => {
        fireEvent.click(getByTestId("btnSignOut"));
        expect(queryByTestId("mainPage")).toBeFalsy();
        expect(queryByTestId("introPage")).toBeTruthy();
    })
});
