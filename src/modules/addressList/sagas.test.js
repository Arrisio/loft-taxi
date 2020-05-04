
import * as sagas from "./sagas";
import {runSaga} from "redux-saga";
import {call, fork, put} from "redux-saga/effects";
import * as publicActions from './actionsPublic';
import * as privateActions from './actionsPrivate';
import * as api from './api';
import {recordSaga} from '../../utils/testUtils'


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