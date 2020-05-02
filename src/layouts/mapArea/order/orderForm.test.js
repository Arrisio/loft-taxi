import React from "react";
import selectEvent from 'react-select-event'

import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {rootReducer} from '../../../modules'

import {createStore} from 'redux'

import {OrderForm} from "./orderForm";
import {renderWithProviders} from '../../../utils/testUtils'


const store = createStore(rootReducer, {})
describe("order form ", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("renders correctly", () => {
        const {getByTestId, queryByTestId, getByText} = render(<OrderForm
            classes={{}}
            fetchRoute={jest.fn()}
            addresses={[]}
            confirmHandler={jest.fn()}
        />);
        expect(getByTestId("order-form")).toBeTruthy();
        expect(getByText("Откуда")).toBeTruthy();
        expect(getByText("Куда")).toBeTruthy();
        expect(getByText("Вызвать такси")).toBeTruthy();
    })

    it("order sended successfully", async () => {
        const confirmHandler = jest.fn(() => {
        });

        const {getByTestId, queryByTestId, getByText} = render(<OrderForm
            classes={{}}
            fetchRoute={jest.fn()}
            addresses={['addr1', 'addr2', 'addr3']}
            confirmHandler={confirmHandler}
        />);
        const fromAddrField = getByText("Откуда");
        const toAddrField = getByText("Куда");
        const makeOrderBtn = getByTestId("order-submit");

        // wait(() => {fireEvent.submit(getByTestId('order-form'), {target: {address_from: 'addr1', address_to: 'addr2'}})});
        // expect(confirmHandler).toHaveBeenCalled()


        await selectEvent.select(fromAddrField, 'addr1');
        expect(getByTestId("order-form")).toHaveFormValues({address_from: 'addr1'});

        await selectEvent.select(toAddrField, 'addr2');
        expect(getByTestId("order-form")).toHaveFormValues({address_to: 'addr2'})

        wait(() => {
            fireEvent.click(makeOrderBtn)
        });
        wait(() => {
            expect(confirmHandler).toHaveBeenCalled()
        });
    })
    it("order not sended without addresses", async () => {
        const confirmHandler = jest.fn(() => {
        });

        const {getByTestId, queryByTestId, getByText} = render(<OrderForm
            classes={{}}
            fetchRoute={jest.fn()}
            addresses={['addr1', 'addr2', 'addr3']}
            confirmHandler={confirmHandler}
        />);

        const toAddrField = getByText("Куда");
        const makeOrderBtn = getByTestId("order-submit");


        await selectEvent.select(toAddrField, 'addr2');
        expect(getByTestId("order-form")).toHaveFormValues({address_to: 'addr2'})

        wait(() => {
            fireEvent.click(makeOrderBtn)
        });
        wait(() => {
            expect(confirmHandler).not.toHaveBeenCalled()
        });
    })
});