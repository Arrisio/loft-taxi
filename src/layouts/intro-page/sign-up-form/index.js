import React, {useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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

import {signUp} from "../../../modules/auth";


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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const signUpHandler = e => {
        e.preventDefault();
        (async () => {
            signUp({name, surname, email, password})
        })()
            .then(() => {
                history.push('/')
            })
    }

    return (
        <Paper className={classes.paper}>
            <form onSubmit={signUpHandler} data-testid="formSignUp">
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
                            <RouterLink to="/signin" data-testid="linkGotoSignIn" >
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <Grid>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">Имя</InputLabel>
                            <Input
                                className={classes.input}
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="Имя"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Фамилия</InputLabel>
                            <Input
                                className={classes.input}
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Фамилия"
                                required
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                        </FormControl>
                    </Grid>
                    <FormControl required>
                        <InputLabel htmlFor="signup_password">
                            Пароль
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="signup_password"
                            name="signup_password"
                            type="password"
                            placeholder="Пароль"
                            required
                            onChange={e => setPassword(e.target.value)}
                            value={password}
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
    );
};

export default withStyles(styles)(
    connect(null, {signUp})(withRouter(SignUpForm))
);

