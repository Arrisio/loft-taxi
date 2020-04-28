import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Grid, Paper, TextField, Typography,} from '@material-ui/core';
import {DatePicker} from '@material-ui/pickers';
import {withStyles} from '@material-ui/core/styles';
import {MCIcon} from 'loft-taxi-mui-theme';
import {connect} from 'react-redux';

import {fetchCard, getCardCvc, getCardExpiryDate, getCardName, getCardNumber, saveCard} from '../../modules/card';
import {getToken} from '../../modules/auth';
import {CardNumberFormat} from "./card-number-format";
import {CardCVCFormat} from "./card-cvc-format";
import {styles} from "./styles";


export const PaymentForm = ({classes, token, saveCard, cvc, expiryDate, cardName, cardNumber, confirmCardSaved}) => {
    const [formCardName, setFormCardName] = useState(cardName);
    const [formCardNumber, setFormCardNumber] = useState(cardNumber);
    const [formCvc, setFormCvc] = useState(cvc);
    const [formExpiryDate, setFormExpiryDate] = useState(expiryDate|| new Date());

    const handlerSubmit = (e) => {
        e.preventDefault();

        saveCard({
            cardNumber: formCardNumber,
            expiryDate: formExpiryDate,
            cardName: formCardName,
            cvc: formCvc,
            token
        });
        confirmCardSaved();
    };

    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form onSubmit={handlerSubmit} data-testid="save-card-form">
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <MCIcon/>
                            <TextField
                                id="card_number"
                                name="card_number"
                                label="Номер карты"
                                placeholder="0000 0000 0000 0000"
                                required
                                margin="normal"
                                InputProps={{
                                    inputComponent: CardNumberFormat,
                                }}
                                InputLabelProps={{ shrink: true }}
                                value={formCardNumber}
                                onChange={e => setFormCardNumber(e.target.value)}
                            />
                            <DatePicker
                                id="card_date"
                                name="card_date"
                                label="Срок действия"
                                required
                                margin="normal"
                                clearable
                                format="MM/YY"
                                views={['year', 'month']}
                                value={formExpiryDate}
                                onChange={setFormExpiryDate}
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <TextField
                                id="card_name"
                                name="card_name"
                                label="Имя владельца"
                                placeholder="Имя владельца"
                                required
                                margin="normal"
                                value={formCardName}
                                onChange={e => setFormCardName(e.target.value)}
                            />
                            <TextField
                                id="card_cvc"
                                name="card_cvc"
                                label="CVC"
                                placeholder="CVC"
                                required
                                margin="normal"
                                type="password"
                                InputProps={{
                                    inputComponent: CardCVCFormat,
                                }}
                                value={formCvc}
                                onChange={e => setFormCvc(e.target.value)}
                                InputLabelProps={{ shrink: true }}
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
