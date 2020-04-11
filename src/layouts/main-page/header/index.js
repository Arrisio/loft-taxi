import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import withStyles from '@material-ui/core/styles/withStyles';

import {AuthCtx} from "../../../app/auth";
// import {warnOnce} from "mapbox-gl/src/util/util";


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
                <Button data-testid="btnGotoMap" onClick={showMapHandler}>Карта</Button>
                <Button data-testid="btnGotoProfile" onClick={showProfileHandler}>Профиль</Button>
                <Button data-testid="btnSignOut" onClick={signOutHandler}>Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    showProfileHandler: PropTypes.func,
    showMapHandler: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Header);
