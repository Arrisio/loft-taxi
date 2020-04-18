import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
    Grid,
    Card,
    TextField,
    Typography,
    Paper,
    Button,
} from '@material-ui/core';
import {DatePicker} from '@material-ui/pickers';
import {withStyles} from '@material-ui/core/styles';
import {MCIcon} from 'loft-taxi-mui-theme';
import {connect} from 'react-redux';

import {
    fetchCard,
    saveCard,
    getCardCvc,
    getCardExpiryDate,
    getCardId,
    getCardName,
    getCardNumber
} from '../../../modules/card';
import {getToken} from '../../../modules/auth';

const styles = () => ({
    paper: {
        padding: '44px 60px',
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: '30px',
    },
    card: {
        padding: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        height: '210px',
        position: 'relative',
    },
    button: {
        marginTop: '30px',
    },
});

const CardNumberFormat = (props) => {
    const {inputRef, onChange, ...rest} = props;
    return (
        <NumberFormat
            {...rest}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
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
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="###"
            mask="_"
        />
    );
};


const PaymentForm = ({classes, token, saveCard, cvc, expiryDate, cardId, cardName, cardNumber}) => {
    // const [selectedDate, handleDateChange] = useState(expiryDate || new Date());
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
    };

    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form onSubmit={handlerSubmit}>
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
                                // InputProps={{
                                //     inputComponent: CardNumberFormat,
                                // }}
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
                                // required
                                margin="normal"
                                type="password"
                                // InputProps={{
                                //     inputComponent: CardCVCFormat,
                                // }}
                                value={formCvc}
                                onChange={e => setFormCvc(e.target.value)}
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
    cardId: getCardId(state),
    cardName: getCardName(state),
    cardNumber: getCardNumber(state),
})

export default connect(
    mapStateToProps,
    {saveCard, fetchCard}
)(withStyles(styles)(PaymentForm));
