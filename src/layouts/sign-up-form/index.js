import React, {useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
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

import {signUp} from "../../modules/auth";
import IntroPage from "../../components/intro-page-wrapper";

const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
        marginRight: '10px',
    },
});
const SignUpForm = ({classes, signUp, history}) => {
    const {register, handleSubmit, error} = useForm();

    const signUpHandler = ({name, surname, email, password}) => {
        console.log(email)
        signUp({name, surname, email, password})
    }

    return (
        <IntroPage>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit(signUpHandler)} data-testid="formSignUp">
                    <Grid container direction="column">
                        <Typography
                            component="h1"
                            variant="h4"
                            align="left"
                            gutterBottom
                        >
                            Регистрация
                        </Typography>
                        <Typography align="left">
                            Уже зарегистрирован?{' '}
                            <RouterLink to="/signin" data-testid="linkGotoSignIn">
                                Войти
                            </RouterLink>
                        </Typography>
                        <FormControl required>
                            <InputLabel htmlFor="email">
                                Адрес электронной почты
                            </InputLabel>
                            <Input
                                className={classes.input}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Адрес электронной почты"
                                required
                                inputRef={register}
                            />
                        </FormControl>
                        <Grid>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">Имя</InputLabel>
                                <Input
                                    className={classes.input}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Имя"
                                    required
                                    inputRef={register}
                                />
                            </FormControl>
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Фамилия</InputLabel>
                                <Input
                                    className={classes.input}
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    placeholder="Фамилия"
                                    required
                                    inputRef={register}
                                />
                            </FormControl>
                        </Grid>
                        <FormControl required>
                            <InputLabel htmlFor="signup_password">
                                Пароль
                            </InputLabel>
                            <Input
                                className={classes.input}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                required
                                inputRef={register}
                            />
                        </FormControl>
                        <Grid align="right">
                            <Button
                                variant="contained"
                                color="primary"
                                elevation={0}
                                type="submit"
                                data-testid="btnsignim"
                            >
                                Зарегистрироваться
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </IntroPage>
    );
};

export default withStyles(styles)(
    connect(null, {signUp})(withRouter(SignUpForm))
);

