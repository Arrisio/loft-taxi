import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Grid, Paper, TextField, Typography,} from '@material-ui/core';
import {DatePicker} from '@material-ui/pickers';
import {withStyles} from '@material-ui/core/styles';
import {MCIcon} from 'loft-taxi-mui-theme';
import {connect} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

import {fetchCard, getCardCvc, getCardExpiryDate, getCardName, getCardNumber, saveCard} from '../../modules/card';
import {getToken} from '../../modules/auth';
// import CustomNumberFormat from "./card-number-format";
// import {CardCVCFormat} from "./card-cvc-format";
import {styles} from "./styles";

import NumberFormat from 'react-number-format';
import moment from 'moment'

// export const PaymentForm = ({classes, token, saveCard: saveCardOnServer, cvc, expiryDate, cardName, cardNumber, confirmCardSaved}) => {
const PaymentForm = ({
                         classes,
                         token,
                         cardNumber,
                         cardName,
                         cvc,
                         expiryDate,
                         saveCard,
                         confirmCardSaved,
                     }) => {
    const {control, handleSubmit, setValue, errors} = useForm();

    const onSubmit = ({cardNumber, expiryDate, cardName, cvc}) => {
        saveCard({cardNumber, expiryDate: expiryDate.format('MM/YY'), cardName: cardName.toUpperCase(), cvc, token});
        confirmCardSaved();
    };
    const CardNumberFormat = (props) => {
        const {inputRef, onChange, ...rest} = props;
        // debugger
        return (
            <NumberFormat
                {...rest}
                onValueChange={(values) => {
                    setValue('cardNumber', values.value);
                }}
                format="#### #### #### ####"
                mask="_"
            />
        );
    };
    const CardCVCFormat = (props) => {
        const {inputRef, onChange, ...rest} = props;
        return (
            <NumberFormat
                {...rest}
                onValueChange={(values) => {
                    setValue('cvc', values.value);
                }}
                format="###"
                mask="_"
            />
        );
    };


    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="payment-form">
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <MCIcon/>
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="Номер карты"
                                placeholder="0000 0000 0000 0000"
                                name="cardNumber"
                                control={control}
                                required
                                defaultValue={cardNumber}
                                InputProps={{
                                    inputComponent: CardNumberFormat,
                                    par:'q'
                                }}
                                InputLabelProps={{shrink: true}}
                                rules={{minLength: 16}}
                                error={!!errors.cardNumber}
                                helperText={
                                    errors.cardNumber && 'должно быть 16 цифр'
                                }
                            />
                            <Controller
                                as={DatePicker}
                                label="Срок действия"
                                name="expiryDate"
                                control={control}
                                required
                                defaultValue={moment('01/' + expiryDate, 'DD/MM/YY')}
                                margin="normal"
                                format="MM/YY"
                                clearable
                                views={['year', 'month']}
                                InputLabelProps={{shrink: true}}
                                rules={{required: true}}
                                error={!!errors.expiryDate}
                                helperText={
                                    errors.expiryDate && 'Необходимо заполнить'
                                }
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="Имя владельца"
                                placeholder="Имя владельца"
                                name="cardName"
                                control={control}
                                required
                                defaultValue={cardName}
                                InputLabelProps={{shrink: true}}
                                rules={{ pattern: /^[a-zA-Z]+\s[a-zA-Z]+$/}}
                                error={!!errors.cardName}
                                helperText={
                                    errors.cardName && 'формат KHREN PETROV'
                                }
                            />
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="CVC"
                                placeholder="CVC"
                                name="cvc"
                                type="password"
                                control={control}
                                required
                                defaultValue={cvc}
                                InputProps={{
                                    inputComponent: CardCVCFormat,
                                }}
                                InputLabelProps={{shrink: true}}
                                rules={{
                                    pattern: /^\d{3}$/,
                                }}
                                error={!!errors.card_cvc}
                                helperText={
                                    errors.card_cvc && 'должно быть 3 цифры'
                                }
                            />
                        </Card>
                    </Grid>
                </Grid>
                <Grid align="center">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        elevation={0}
                        type="submit"
                        data-testid="login-submit"
                    >
                        Сохранить
                    </Button>
                </Grid>
            </form>
        </Paper>
    );
};

PaymentForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    token: getToken(state),
    cvc: getCardCvc(state),
    expiryDate: getCardExpiryDate(state),
    cardName: getCardName(state),
    cardNumber: getCardNumber(state),
})

export default connect(
    mapStateToProps,
    {saveCard, fetchCard}
)(withStyles(styles)(PaymentForm));
