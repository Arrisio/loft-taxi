import React, { useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import { Container, Paper, Box, Typography, Button } from "@material-ui/core/";
import {Grid} from "@material-ui/core";
import styles from './styles'


const OrderSuccess = ({classes, confirmHandler} ) => (
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
                onClick={confirmHandler}
            >
                Сделать новый заказ
            </Button>
        </Grid>
    </Paper>
);

export default withStyles(styles)(OrderSuccess);