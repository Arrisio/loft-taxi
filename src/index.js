import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';

import {MuiThemeProvider} from "@material-ui/core/styles";

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import {theme} from "loft-taxi-mui-theme"; // Импортируем саму тему

import './index.css';

import App from "./app";


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>
    , document.getElementById("root")
);