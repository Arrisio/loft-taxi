import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {act, render, fireEvent, waitFor, wait} from '@testing-library/react'

import {Profile} from "./index";
import PaymentForm from "./paymentForm";
import Header from "../../components/header"
import CardSavedSuccess from "./cardSavedSuccess";

// const mockedModules = ["./card-saved-success","../../components/header","./payment-form" ]

// for (const mod of mockedModules){
//     console.log(mod)
//     jest.mock(mod, () => ({
//         __esModule: true,
//         namedExport: jest.fn(),
//         default: jest.fn()
//     }));
// }

// const mockModule = modulePath => {
//         jest.mock(modulePath, () => ({
//             __esModule: true,
//             namedExport: jest.fn(),
//             default: jest.fn()
//         }))
// };

jest.mock("./payment-form" , () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: jest.fn()
}));

jest.mock("./card-saved-success", () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: jest.fn()
}));


jest.mock("../../components/header", () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: jest.fn()
}));

const createMockComponent = (testId='') => () =>  <div data-testid={testId}></div>;

describe('profile', ()=>{
    const paymentFormTestId = 'PaymentForm'
    const confirmMsgTestId = 'ConfirmMsg'

    beforeEach(() => {
        jest.resetAllMocks();

        PaymentForm.mockImplementation(createMockComponent(paymentFormTestId));
        Header.mockImplementation(createMockComponent());
        CardSavedSuccess.mockImplementation(createMockComponent(confirmMsgTestId));

    });
    it('rendered payment form', () => {
        const {queryByTestId} = render(<Profile classes={{}}/>)

        expect(queryByTestId(paymentFormTestId)).toBeTruthy();
        expect(queryByTestId(confirmMsgTestId)).toBeFalsy();
    })

    it('rendered success msg form when flag on', () => {
        const {queryByTestId} = render(<Profile classes={{}} flagCardSavedSuccessMsgInit={true}/>)

        expect(queryByTestId(paymentFormTestId)).toBeFalsy();
        expect(queryByTestId(confirmMsgTestId)).toBeTruthy();
    })
})
