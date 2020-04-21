import React from 'react';
import {Grid, Paper} from '@material-ui/core';

import {Logo} from 'loft-taxi-mui-theme';

import initStyles from './styles';

const IntroPage = ({children}) => {
    const styles = initStyles();

    return (
        <Paper className={styles.introPage}  data-testid="introPage">
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
                {children}
            </Grid>
        </Paper>
    )
};

export default IntroPage;