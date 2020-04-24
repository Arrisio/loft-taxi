import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
    Grid,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link,
    Paper,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import {signIn} from "../../../modules/auth";
import {withRouter} from "react-router-dom";

const styles = () => (
    {a1: {a: 'b'}}
);

const OrderArea =  () => {
    return (
        <Paper>



        </Paper>
    )


}

export default withStyles(styles)(
    connect(null, {})(withRouter(OrderArea))
);
