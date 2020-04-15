import {makeStyles} from "@material-ui/core/styles";
import backImage from "../../assets/img/login-background.jpg";

export default makeStyles({
    logo: {
        marginRight: '215px',
    },
    introPage: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover'
    }
})

// export default useStyles();