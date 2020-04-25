import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { getIsPaymentMethodReceived } from '../../../modules/card';
import OrderForm from './order-form';
import NeedCard from "./need-card";
import OrderSuccess from "./order-success";
import styles from './styles';

const Order = ({ classes, isPaymentMethodReceived, isOrdered, reset, orderTaxi }) => {
    const [flagOrderSuccessMsg, setFlagOrderSuccessMsg] = useState(false);
    const toggleFlagOrderSuccessMsg = () => {setFlagOrderSuccessMsg(!flagOrderSuccessMsg)};

    const OrderContent = (flagOrderSuccessMsg) ? OrderSuccess : OrderForm

    return (
        <Container className={classes.container}>
            <Paper className={classes.order}>
                {(isPaymentMethodReceived) ? <OrderContent confirmHandler={toggleFlagOrderSuccessMsg}/> : <NeedCard/>}
            </Paper>
        </Container>
    );
};

const mapStateToProps = state => ({
    isPaymentMethodReceived: getIsPaymentMethodReceived(state),
});

export default connect(mapStateToProps, null)(withStyles(styles)(Order));