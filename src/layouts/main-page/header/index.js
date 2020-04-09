import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import withStyles from '@material-ui/core/styles/withStyles';

import {AuthCtx} from "../../../app/auth";


const styles = () => ({
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: 1,
    },
});

const Header = ({showProfileHandler, showMapHandler, classes }) => {
    const {signOutHandler} = useContext(AuthCtx);

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.logo}>
                    <Logo />
                </Container>
                <Button onClick={showMapHandler}>Карта</Button>
                <Button onClick={showProfileHandler}>Профиль</Button>
                <Button onClick={signOutHandler}>Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);
