// import { default as sagas } from "./sagas";
import * as sagas from "./sagas";
import {runSaga} from "redux-saga";
import {call, fork, put} from "redux-saga/effects";
import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
import { fetchCard } from '../card/sagas'
// import { auth } from "../../helpers/api";
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

describe("Auth saga", () => {
    describe("signIn success", () => {
        const action = {payload:{
            login: "test@df",
            password: "123"
        }};
        api.signIn = jest.fn();

        beforeEach(() => {
            jest.resetAllMocks();
        });

        it("Auth success", async () => {
            const res = {"success":true,"token":"TOKEN123"}
            api.signIn.mockImplementation(() => res)

            const dispatched = await recordSaga(
                sagas.signIn,
                action,
            )
            expect(dispatched).toContainEqual(privateActions.signInRequest());
            expect(api.signIn).toHaveBeenCalled();
            expect(api.signIn).toHaveBeenCalledWith(action.payload);
            expect(dispatched).toContainEqual(privateActions.signInSuccess({...action.payload, ...res}));
        });

        it("Auth failed", async () => {
            const res = {"success":false,"error":"me error"}
            api.signIn.mockImplementation(() => res)

            const dispatched = await recordSaga(
                sagas.signIn,
                action,
            )

            expect(dispatched).toContainEqual(privateActions.signInRequest());
            expect(api.signIn).toHaveBeenCalled();
            expect(api.signIn).toHaveBeenCalledWith(action.payload);
            expect(dispatched).toContainEqual(privateActions.signInFaliure(res.error));
        });

    });
});