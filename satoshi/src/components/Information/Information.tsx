import React, { ReactElement } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    info: {
        padding: theme.spacing(8, 0, 6),
    }
}));

const Information = (): ReactElement =>{
    const classes = useStyles();
    return (
        <Container maxWidth="sm" component="main" className={classes.info}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Lets Get Started
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                How does Satoshi work? First, we need compare CryptoCurrencies. Select two or three or
                however many you want, compare them and see what our engine analysis has to say.
            </Typography>
        </Container>
    );
}

export default Information;