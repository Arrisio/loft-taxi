import React  from "react";
import {Link, Link as RouterLink} from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import {Grid, Paper, Box, Typography, Button , Card} from "@material-ui/core/";

import styles from './styles'


const CardSavedSuccess = ({classes} ) =>  (
    <Paper className={classes.paper}>
        <Card className={classes.card} elevation={3}>
        <Grid container direction="column">
            <Typography
                className={classes.text}
                component="h1"
                variant="h4"
                align="left"
            >
                Карта сохранена
            </Typography>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/map"
            >
                Сделать новый заказ
            </Button>
        </Grid>
        </Card>
    </Paper>
);

// export default connect(null, {clearRoute})(withStyles(styles)(CardSavedSuccess));
export default withStyles(styles)(CardSavedSuccess);