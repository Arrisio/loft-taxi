// import { default as sagas } from "./sagas";
import * as sagas from "./sagas";
import { call, put } from "redux-saga/effects";
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

        let res
        it("Auth call", () => {
            // expect(1).toEqual(1)
            expect(iterator.next().value).toEqual(
                put(privateActions.signInRequest()))
            res = iterator.next().value
            expect(res).toEqual(
                call(api.signIn,  userData))
            // console.log(res)
            res = iterator.next().value
            // console.log(res)
            // expect(iterator.next().value).toEqual(
            //     put(privateActions.signInSuccess()))

            // expect(iterator.next(userData).value).toEqual(
            //     call(auth, userData["login"], userData["password"])
            // );
        });
        //
        // it("Auth — authSuccess)", () => {
        //     const data = { success: true };
        //     expect(iterator.next(data).value).toEqual(put(authSuccess()));
        // });
    });

});