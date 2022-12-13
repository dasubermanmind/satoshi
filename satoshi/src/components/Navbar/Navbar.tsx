import React, { ReactElement } from "react";
import {
    AppBar,
    createStyles,
    fade,
    IconButton,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);

interface NavProps {
    coins: any[];
}

const Navbar = ({ coins }: NavProps): ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        Welcome to Satoshi--icon here
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                    <Link to="/dashboard">Dashboard</Link>
                    </Typography>
                    
                </Toolbar>
            </AppBar>

            <Routes>
            <Route path="/dashboard" element={<Dashboard coins={coins} />}>
            </Route>
         </Routes>
        </div>
    );
}

export default Navbar;