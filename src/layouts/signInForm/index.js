import React, {useState} from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {useForm } from 'react-hook-form';

import {
    Grid,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link,
    Paper,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import IntroPage from "../../components/introPageWrapper";
import {signIn} from '../../modules/auth'


const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
    },
});

const SignInForm = ({classes, signIn, history}) => {
    const {register, handleSubmit, error} = useForm();

    const signInHandler = ({email,password }) => {
        signIn({email, password});
    }

    return (
        <IntroPage>
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit(signInHandler)} data-testid="formSignIn">
                <Grid container direction="column">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        gutterBottom
                    >
                        Войти
                    </Typography>
                    <Typography align="left">
                        Новый пользователь?{' '}
                        <Link
                            align="left"
                            underline="none"
                            to="/signup"
                            data-testid="linkGotoSignUp"
                            component={RouterLink}
                        >
                                Зарегистрируйтесь
                        </Link>
                    </Typography>
                    <FormControl required>
                        <InputLabel htmlFor="username">
                            Имя пользователя
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Имя пользователя"
                            inputProps={{"data-testid": "inputLoginName"}}
                            inputRef={register}
                        />
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <Input
                            className={classes.input}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            required
                            inputProps={{"data-testid": "inputPassword"}}
                            inputRef={register}
                        />
                    </FormControl>
                    <Grid align="right">
                        <Button
                            data-testid="btnsignin"
                            variant="contained"
                            color="primary"
                            elevation={0}
                            type="submit"
                        >
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
        </IntroPage>
    );
};


export default withStyles(styles)(
    connect(null, {signIn})(withRouter(SignInForm))
);
