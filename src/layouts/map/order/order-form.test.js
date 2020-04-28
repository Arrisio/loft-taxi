import React from "react";
import selectEvent from 'react-select-event'

import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {rootReducer} from '../../../modules'

import { createStore } from 'redux'

import {OrderForm} from "./order-form";
import {renderWithProviders} from '../../../utils/test-utils'




const store = createStore(rootReducer, {})
describe("order form ", () => {
        beforeEach(() => {
        jest.resetAllMocks();
    });

    it("renders correctly",  () => {
        const {getByTestId, queryByTestId, getByText} =  render(<OrderForm
            classes={{}}
            fetchRoute={jest.fn()}
            addresses ={[]}
            confirmHandler = {jest.fn()}
        />);
        expect(getByTestId("order-form")).toBeTruthy();
        expect(getByText("Откуда")).toBeTruthy();
        expect(getByText("Куда")).toBeTruthy();
        expect(getByText("Вызвать такси")).toBeTruthy();
    })

    it("order sended successfully", async () => {
    const confirmHandler=jest.fn();
    const fn = jest.fn();

    const {getByTestId, queryByTestId, getByText} =  render(<OrderForm
        classes={{}}
        fetchRoute={jest.fn()}
        addresses ={['addr1','addr2', 'addr3']}
        confirmHandler = {confirmHandler}
    />);
    const fromAddrField = getByText("Откуда");
    const toAddrField = getByText("Куда");
    const makeOrderBtn = getByText("Куда");



    wait(() => {fireEvent.submit(getByTestId('order-form'), {target: {address_from: 'addr1', address_to: 'addr2'}})});
    // expect(confirmHandler).toHaveBeenCalled()


await selectEvent.select(fromAddrField, 'addr1')
    // fireEvent.change(fromAddrField, { target: { label:'addr1',  value: 'addr1' } });
    // expect(fromAddrField).toBe('addr1');
    // fireEvent.change(toAddrField, { target: { label:'addr2',  value: 'addr2' } });
    // expect(toAddrField).toBe('addr2');

    // fireEvent.click(makeOrderBtn);
    // expectSaga
    // wait(() => {fireEvent.submit(getByText('formSignIn'), {target: {username: 'test@df', password: '123'}})});
})

});