import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {Grid, FormControl, Button, Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import {getAddressList} from '../../../modules/addressList';
import {fetchRoute, clearRoute} from '../../../modules/route';
import styles from './styles'


export const OrderForm = ({classes, fetchRoute, addresses, confirmHandler, clearRoute}) => {
    const [addressFrom, setAddressFrom] = useState(null);
    const [addressTo, setAddressTo] = useState(null);

    useEffect(() => {
            (addressFrom && addressTo)
                ? fetchRoute({address1: addressFrom.value, address2: addressTo.value})
                : clearRoute()

            return () => {
                clearRoute()
            }
        },
        [addressFrom, addressTo]
    )


    let addressListFrom = addresses
        .filter((item) => (addressTo ? item !== addressTo.value : true))
        .map((item) => {
            return {label: item, value: item};
        });
    let addressListTo = addresses
        .filter((item) => (addressFrom ? item !== addressFrom.value : true))
        .map((item) => {
            return {label: item, value: item};
        });

    const makeOrder = e => {
        e.preventDefault();
        confirmHandler();
    };

    return (
        <Paper className={classes.paper}>
            <form
                id="order-form"
                data-testid="order-form"
                onSubmit={makeOrder}
            >
                <Grid container direction="column">
                    <FormControl className={classes.fromControl}>
                        <Select
                            name="address_from"
                            placeholder="Откуда"
                            isClearable
                            options={addressListFrom}
                            value={addressFrom}
                            onChange={setAddressFrom}
                        />
                    </FormControl>
                    <FormControl className={classes.fromControl}>
                        <Select
                            name="address_to"
                            placeholder="Куда"
                            isClearable
                            options={addressListTo}
                            value={addressTo}
                            onChange={setAddressTo}
                        />
                    </FormControl>
                    <Grid align="right">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            data-testid="order-submit"
                            disabled={!addressFrom || !addressTo}
                        >
                            Вызвать такси
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};


const mapStateToProps = (state) => ({
    addresses: getAddressList(state),
});
const mapDispatchToProps = {
    fetchRoute,
    clearRoute
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(OrderForm));