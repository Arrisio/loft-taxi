import React, {createContext} from "react";

import { MemoryRouter} from 'react-router-dom'

import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {rootReducer} from '../../../modules'
import {OrderArea} from "./order-area";
import { createStore } from 'redux'
import {Provider } from 'react-redux';
import OrderForm from "./OrderForm";
import NeedCard from "./need-card";
import OrderSuccess from "./order-success";

const renderWithProviders  = (children, store=createStore(rootReducer)) => {
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

const store = createStore(rootReducer, {})
describe("form area", () => {
    jest.mock('./OrderForm', () => () => (<div>Hello World</div>));
    // jest.mock('OrderForm', () => () => (<div>Hello World</div>));
    // jest.mock(OrderForm, () => () => (<div>Hello World</div>));
    // jest.mock('./need-card', () => () => (<div>Hello World</div>));
    // jest.mock('./order-success', () => () => (<div>Hello World</div>));
    // OrderForm.mockImplementation(()=> <div>hello world</div>);
    // beforeEach(() => {
    //     jest.resetAllMocks();
    // });

    it("renders need payment if no card",  () => {
        // const {getByTestId, queryByTestId, getByText} =  renderWithProviders(<OrderArea isPaymentMethodReceived={false}/>);
        const {getByTestId, queryByTestId, getByText} =  render(<MemoryRouter><OrderArea isPaymentMethodReceived={true} classes={{}}/></MemoryRouter>);
        expect(getByText("Заполните платежные данные")).toBeTruthy();
    })

    it("renders order form if card received",  () => {
        // const {getByTestId, queryByTestId, getByText} =  renderWithProviders(<OrderArea isPaymentMethodReceived={true}/>);
        const {getByTestId, queryByTestId, getByText} =  render(<OrderArea isPaymentMethodReceived={true}/>);
        // expect(getByText("Откуда")).toBeTruthy();
        // expect(getByText("Куда")).toBeTruthy();
        expect(getByTestId("order-form")).toBeTruthy();
    })

    it("renders order form if card received",  () => {
        const {getByTestId, queryByTestId, getByText} =  renderWithProviders(<OrderArea isPaymentMethodReceived={true} flagOrderSuccessMsgInit={true}/>);
        expect(getByText("Заказ размещён")).toBeTruthy();
    })
});