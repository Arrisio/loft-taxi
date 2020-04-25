
import * as sagas from "./sagas";
import {runSaga} from "redux-saga";
import {call, fork, put} from "redux-saga/effects";
import * as publicActions from './actions-public';
import * as privateActions from './actions-private';


import * as api from './api';

async function recordSaga(saga, initialAction) {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action)
        },
        saga,
        initialAction
    ).done;

    return dispatched;
}

describe("Card sagas", () => {
    describe("fetch card ", () => {
        const action = {payload: {token: 'token123'}}
        let res;

        api.fetchCard = jest.fn();


        beforeEach(() => {
            jest.resetAllMocks();
        });

        it("success", async () => {
            api.fetchCard.mockImplementation(() => res)
            res = {"success":true, cardData:"cardData"}

            const dispatched = await recordSaga(
                sagas.fetchCard,
                action,
            )
            expect(dispatched).toContainEqual(privateActions.fetchCardRequest());
            expect(api.fetchCard).toHaveBeenCalled();
            expect(api.fetchCard).toHaveBeenCalledWith(action.payload);
            expect(dispatched).toContainEqual(
                privateActions.fetchCardSuccess({...action.payload, ...res})
            );
        });
    });
    describe("save card ", () => {
        const action = {payload: {cardData: 'carData'}}
        let res;

        api.saveCard = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it("success", async () => {
            res = {success: true}
            api.saveCard.mockImplementation(() => res)

            const dispatched = await recordSaga(
                sagas.saveCard,
                action,
            )
            expect(dispatched).toContainEqual(privateActions.saveCardRequest());
            expect(api.saveCard).toHaveBeenCalled();
            expect(api.saveCard).toHaveBeenCalledWith(action.payload);
            expect(dispatched).toContainEqual(privateActions.saveCardSuccess({...action.payload, ...res}));
        });


    });
});