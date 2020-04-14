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
    },
});

const SignInForm = ({classes, handlerGotoSignUp}) => {
    const {signInHandler} = useContext(AuthCtx);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Paper className={classes.paper}>
            <form onSubmit={() => signInHandler(username, password)} data-testid="formSignIn">
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
                            href="/signup"
                            onClick={handlerGotoSignUp}
                            data-testid="linkGotoSignUp"
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
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Имя пользователя"
                            required
                            inputProps={{ "data-testid": "inputLoginName" }}
                            value= {username}
                            onChange={ e => setUsername(e.target.value)}
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
                            inputProps={{ "data-testid": "inputPassword" }}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
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
    );
};

export default withStyles(styles)(SignInForm);
