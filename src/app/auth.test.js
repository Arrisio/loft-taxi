import React, {useContext} from "react";
import {Auth, AuthCtx} from "./auth";
// import AuthCtx from '/app/auth';
// import AuthCtx from "../../app/auth"
import {render, screen, fireEvent} from "@testing-library/react";
import App from "./index";
import loadGeometry from "mapbox-gl/src/data/load_geometry";


describe("аутентификация", () => {
    const tree = (
        <Auth>
            <div data-testId="page-behing-auth"></div>
        </Auth>
    )
    // const {signInHandler, signOutHandler} = useContext(AuthCtx);

    it("проверяем, что отриловалась страница входа, и нет страницы приложения", () => {
        const {getByTestId, queryByTestId, getByText} = render(tree);
        expect(queryByTestId("page-behing-auth")).toBeFalsy();
        expect(getByTestId("introPage")).toBeTruthy();
    })
    it("вход", () => {
        const {getByTestId, queryByTestId, getByText} = render(tree);
        (AuthCtx.Provider)
        // signInHandler();
        expect(queryByTestId("page-behing-auth")).toBeFalsy();
        expect(getByTestId("introPage")).toBeTruthy();
    })
})


