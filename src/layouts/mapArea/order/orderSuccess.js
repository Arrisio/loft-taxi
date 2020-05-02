import React, { useEffect } from "react";
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import {Grid, Paper, Box, Typography, Button } from "@material-ui/core/";

import styles from './styles'
import {clearRoute} from '../../../modules/route'

const OrderSuccess = ({classes, confirmHandler, clearRoute} ) => (
    <Paper className={classes.paper}>
        <Grid container direction="column">
            <Typography
                className={classes.text}
                component="h1"
                variant="h4"
                align="left"
            >
                Заказ размещён
            </Typography>
            <Typography className={classes.text}>
                Ваше такси уже едет к вам. Прибудет приблизительно
                через 10 минут.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {clearRoute(); confirmHandler();}}
            >
                Сделать новый заказ
            </Button>
        </Grid>
    </Paper>
);

export default connect(null, {clearRoute})(withStyles(styles)(OrderSuccess));