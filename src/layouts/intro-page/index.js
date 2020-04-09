import React, {useState} from 'react';
import {Grid, Paper} from '@material-ui/core';

import {Logo} from 'loft-taxi-mui-theme';
import SignInForm from "./sign-in-form";
import SignupForm from "./sign-up-form";

import IntroPageFormCtx from "./intro-page-ctx";
import initStyles from './styles';

const IntroPage = () => {
    const styles = initStyles();

    const [currentForm, setCurrentForm] = useState("sign-in-form");
    const gotoSignUp = e => {
        e.preventDefault();
        setCurrentForm('sign-up-form');
    };
    const gotoSignIn = e => {
        e.preventDefault();
        setCurrentForm('sign-in-form');
    };

    return (

        <Paper className={styles.introPage}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{minHeight: '100vh'}}
            >
                <Logo
                    white={true}
                    animated={true}
                    classes={{logo: styles.logo}}
                />
                <IntroPageFormCtx.Provider value={{handlerGotoSignUp: gotoSignUp, handlerGotoSignIn: gotoSignIn}}>
                    {
                        currentForm === "sign-in-form"
                            ? <SignInForm/>
                            : <SignupForm/>
                    }
                </IntroPageFormCtx.Provider>
            </Grid>
        </Paper>
    )
};

export default IntroPage;