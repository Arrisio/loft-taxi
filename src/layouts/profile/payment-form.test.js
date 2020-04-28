import React from "react";
import selectEvent from 'react-select-event'

import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {rootReducer} from '../../modules/'

import {createStore} from 'redux'

import {PaymentForm} from "./payment-form";
import {renderWithProviders, renderWithTheme} from '../../utils/test-utils'


const store = createStore(rootReducer, {})
describe("order form ", () => {
    const confirmCardSaved=jest.fn();
    const saveCard=jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("renders correctly", () => {
        const {getByTestId, queryByTestId, getByText} = renderWithTheme(
            <PaymentForm classes={{}} confirmCardSaved={jest.fn()}/>
            );
        // expect(getByTestId("order-form")).toBeTruthy();
        expect(getByText("Номер карты")).toBeTruthy();
        expect(getByText("Срок действия")).toBeTruthy();
        expect(getByText("Имя владельца")).toBeTruthy();
        expect(getByText("CVC")).toBeTruthy();
    })

    it("card saved successfully", async () => {
        const {getByTestId, queryByTestId, getByText} = renderWithTheme(
            <PaymentForm
                classes={{}}
                confirmCardSaved={confirmCardSaved}
                saveCard={confirmCardSaved}/>
        );

        wait(() => {fireEvent.submit(
            getByTestId('save-card-form'),
            {target: {
                    card_number: '0000 0000 0000 0000',
                    card_date: '12/12',
                    card_name: 'vasia',
                    card_cvc: '123'
                }}
            )});
        wait(() => {
            expect(confirmCardSaved).toHaveBeenCalled()
        });
        wait(() => {
            expect(saveCard).toHaveBeenCalled()
        });
    })

    it("card have not been saved", async () => {

        const {getByTestId, queryByTestId, getByText} = renderWithTheme(
            <PaymentForm
                classes={{}}
                confirmCardSaved={confirmCardSaved}
                saveCard={saveCard}/>
        );

        wait(() => {
            fireEvent.submit(
                getByTestId('save-card-form'),
                {
                    target: {
                        card_number: '0000 0000 0000 0000',
                        card_date: '12/12',
                        card_name: 'vasia',
                        // card_cvc: '123'
                    }
                }
            )
        });
        expect(saveCard).not.toHaveBeenCalled()
        wait(() => {
            expect(confirmCardSaved).not.toHaveBeenCalled()
        });
    });
});