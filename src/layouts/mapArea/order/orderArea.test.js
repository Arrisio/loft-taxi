import React, {createContext} from "react";

import { MemoryRouter} from 'react-router-dom'

import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {rootReducer} from '../../../modules'
import OrderArea from "./orderArea";
import { createStore } from 'redux'
import {Provider } from 'react-redux';
// import OrderForm from "./OrderForm";
import NeedCard from "./needCardMsg";
import OrderSuccess from "./orderSuccess";
import {renderWithProviders} from '../../../utils/testUtils'


const store = createStore(rootReducer, {})
describe("form area", () => {
    // jest.mock('./OrderForm', () => () => (<div>Hello World</div>));
    // OrderForm.mockImplementation(()=> <div>hello world</div>);

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("renders need payment if no card",  () => {
        const {getByTestId, queryByTestId, getByText} =  renderWithProviders(
            <OrderArea/> , 
            createStore(rootReducer, {card:{isPaymentMethodReceived: false}})
        );
        expect(getByText("Заполните платежные данные")).toBeTruthy();
    })

    it("renders order form if card received",  () => {
        const {getByTestId, queryByTestId, getByText} =  renderWithProviders(
            <OrderArea/> ,
            createStore(rootReducer, {card:{isPaymentMethodReceived: true}})
        );
        expect(getByText("Откуда")).toBeTruthy();
        expect(getByText("Куда")).toBeTruthy();
        expect(getByTestId("order-form")).toBeTruthy();
    })

    it("renders message if card saved",  () => {
        const {getByTestId, queryByTestId, getByText} =  renderWithProviders(
            <OrderArea flagOrderSuccessMsgInit={true}/> ,
            createStore(rootReducer, {card:{isPaymentMethodReceived: true}})
        );
        
        expect(getByText("Заказ размещён")).toBeTruthy();
    })
});