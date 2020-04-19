import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
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

import {Link as RouterLink} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import {signIn} from '../../../modules/auth'

const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
    },
});

const SignInForm = ({classes, signIn, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = e => {
        e.preventDefault();
        signIn({email, password});
    }

    return (
        <Paper className={classes.paper}>
            <form onSubmit={signInHandler} data-testid="formSignIn">
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
                        {/*<Link*/}
                        {/*    align="left"*/}
                        {/*    underline="none"*/}
                        {/*    // to="/signup"*/}
                        {/*    data-testid="linkGotoSignUp"*/}
                        {/*>*/}
                            <RouterLink to="/signup" data-testid="linkGotoSignUp">
                                Зарегистрируйтесь
                            </RouterLink>
                        {/*</Link>*/}
                    </Typography>
                    <FormControl required>
                        <InputLabel htmlFor="username">
                            Имя пользователя
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="username"
                            name="email"
                            type="text"
                            placeholder="Имя пользователя"
                            required
                            inputProps={{"data-testid": "inputLoginName"}}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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


export default withStyles(styles)(
    connect(null, {signIn})(withRouter(SignInForm))
);
