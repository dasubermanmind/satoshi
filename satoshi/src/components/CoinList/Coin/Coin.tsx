import React, { ReactElement } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export interface CoinProps{
    id: string;
    symbol: string;
    name: string;
}

const Coin = ({ id, symbol, name }: CoinProps): ReactElement => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    { name }
                </Typography>
                <Typography variant="h5" component="h2">
                    { symbol }
                </Typography>
                <Typography variant="body2" component="p">
                    { id }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Coin;