import React, { useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Box, Typography, Button } from "@material-ui/core/";



const useFormStyles = makeStyles(() => ({
    container: {
        padding: "24px"
    },
    order: {
        padding: "40px 0",
        width: "500px"
    },
    orderContainer: {
        padding: "0 50px"
    },
    message: {
        textAlign: "center"
    },
    button: {
        marginTop: "30px"
    }
}));

const classes = useFormStyles();

const OrderSuccess = () => (
    <Box className={classes.message}>
        <Typography variant="body1">
            Ваш заказ принят. Такси скоро приедет.
        </Typography>
        <Button
            onClick={() => {}}
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
        >
            Сделать новый заказ
        </Button>
    </Box>
);

export default OrderSuccess;