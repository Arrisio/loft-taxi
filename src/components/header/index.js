import React  from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import withStyles from '@material-ui/core/styles/withStyles';

import {connect} from 'react-redux';
import {signOut} from "../../modules/auth";


const styles = () => ({
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: 1,
    },
});

const Header = ({history, signOut, classes }) => {

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.logo}>
                    <Logo />
                </Container>
                <Button data-testid="btnGotoMap" onClick={() => {history.push('/map')}}>Карта</Button>
                <Button data-testid="btnGotoProfile" onClick={()=> {history.push('/profile')}}>Профиль</Button>
                <Button data-testid="btnSignOut" onClick={signOut}>Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(
    connect(null, {signOut})(withRouter(Header))
);
