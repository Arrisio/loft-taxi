import React  from "react";
import { Link as RouterLink } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import {Grid,  Paper, Typography, Button } from "@material-ui/core/";
import styles from './styles'


const NeedCardMsg = ({classes}) => (
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


export default withStyles(styles)(NeedCardMsg);