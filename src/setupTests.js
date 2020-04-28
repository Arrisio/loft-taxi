import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./modules";
import 'mutationobserver-shim';

global.URL.createObjectURL = jest.fn()
HTMLCanvasElement.prototype.getContext = jest.fn()

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}));

global.renderWithProviders  = function(children, store=createStore(rootReducer)) {
    let rendered = render(
        <MemoryRouter>
            <Provider store={store}>{children}</Provider>
        </MemoryRouter>
    );

    return {
        ...rendered,
        store
    };
};