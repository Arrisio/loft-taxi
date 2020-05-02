import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import PaymentForm from './paymentForm';
import CardSavedSuccess from "./cardSavedSuccess";
import backImage from "../../assets/img/login-background.jpg";
import MainPage from "../../components/mainPageWrapper";

const styles = () => ({
    root: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
    },
    content: {paddingTop: '50px'},
});


export const Profile = ({classes, flagCardSavedSuccessMsgInit = false}) => {
    const [flagCardSavedSuccessMsg, setFlagCardSavedSuccessMsg] = useState(flagCardSavedSuccessMsgInit);
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
                        {(flagCardSavedSuccessMsg)
                            ? <CardSavedSuccess/>
                            : <PaymentForm confirmCardSaved={() => {
                                setFlagCardSavedSuccessMsg(true)
                            }}/>}
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

