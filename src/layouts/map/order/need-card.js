import React, { useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import { Container, Paper, Box, Typography, Button } from "@material-ui/core/";
import styles from './styles'
import {Grid} from "@material-ui/core";



const NeedCard = ({classes}) => (
    <Paper className={classes.paper}>
        <Grid container direction="column">
            <Typography
                className={classes.text}
                component="h1"
                variant="h4"
                align="left"
            >
                Заполните платежные данные
            </Typography>
            <Typography className={classes.text}>
                Укажите информацию о банковской карте, чтобы сделать
                заказ.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                component={RouterLink}
                to="/profile"
            >
                Перейти в профиль
            </Button>
        </Grid>
    </Paper>
);


export default withStyles(styles)(NeedCard);