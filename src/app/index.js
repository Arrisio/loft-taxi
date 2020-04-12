import React from "react";


import MainPage from "../layouts/main-page";
import {Auth} from "./auth";
import {Paper} from "@material-ui/core";

const App = () => (
    <Auth>
        <MainPage/>}
    </Auth>
);

export default App;