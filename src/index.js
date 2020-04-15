import React from 'react';
import ReactDOM from 'react-dom';

import {theme} from "loft-taxi-mui-theme"; // Импортируем саму тему
import {MuiThemeProvider} from "@material-ui/core/styles";

import './index.css';

import App from "./app";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById("root")
);