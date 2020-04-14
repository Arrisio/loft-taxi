import React, {useContext, useState} from 'react';

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
import {AuthCtx} from "../../../app/auth";


const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
        marginRight: '10px',
    },
});
const SignUpForm = ({classes, handlerGotoSignIn}) => {
    const {signInHandler} = useContext(AuthCtx);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Paper className={classes.paper}>
            <form onSubmit={() => signInHandler(username, password)} data-testid="formSignUp">
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
                        <Link
                            align="left"
                            underline="none"
                            href="/signin"
                            onClick={handlerGotoSignIn}
                            data-testid="linkGotoSignIn"
                        >
                            Войти
                        </Link>
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
                            value={username}
                            onChange={e => setUsername(e.target.value)}
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

export default withStyles(styles)(SignUpForm);