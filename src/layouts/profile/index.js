import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import PaymentForm from './payment-form';
import backImage from "../../assets/img/login-background.jpg";
import MainPage from "../../components/main-page-wrapper";

const styles = () => ({
    root: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
    },
    content: {paddingTop: '50px'},
});


const Profile = ({classes}) => {
    return (
        <MainPage>
            <Paper className={classes.root} data-testid="profile">
                <Grid
                    className={classes.content}
                    container
                    direction="column"
                    style={{minHeight: 'calc(100vh - 66.39px)'}}
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <PaymentForm/>
                    </Grid>
                </Grid>
            </Paper>
        </MainPage>
    );
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

