// import { default as sagas } from "./sagas";
import * as sagas from "./sagas";
import {call, put} from "redux-saga/effects";
import * as publicActions from './actions-public';
import * as privateActions from './actions-private';
// import { auth } from "../../helpers/api";
import * as api from './api';

describe("Auth sagas", () => {
    describe("signIn success", () => {
        const userData = {
            login: "test@df",
            password: "123"
        };

        const iterator = sagas.signIn(publicActions.signIn(userData));

        it("Auth call", () => {
            expect(iterator.next().value).toEqual(
                put(privateActions.signInRequest()))

            expect(iterator.next().value).toEqual(call(api.signIn, userData))
            expect(iterator.next().value).toEqual(put(privateActions.signInSuccess()))
        });
    });
});