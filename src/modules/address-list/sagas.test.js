
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

describe("fetch address list", () => {

    api.fetchAddressList = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });

        it("Auth success", async () => {
            const res = {"0": [1, 2]};
            api.fetchAddressList.mockImplementation(() => res);

            const dispatched = await recordSaga(
                sagas.fetchAddressList,
                {},
            )

            expect(dispatched).toContainEqual(privateActions.fetchAddressListRequest());
            expect(api.fetchAddressList).toHaveBeenCalled();
            expect(dispatched).toContainEqual(privateActions.fetchAddressListSuccess(res));
        });
});