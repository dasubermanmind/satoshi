import React, { ReactElement, useState } from 'react';
import { Button, Grid, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import CoinList from "./components/CoinList/CoinList";
import MyList from './components/MyList/MyList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { NavLink } from 'react-router-dom';

function App(): ReactElement {
    const [coins, setcoinObserver] = useState([]);
    
    const addCoin = (coin: any, coin_id: any) => {
        setcoinObserver([...coins, coin])
    }
    
    const deleteCoin = (coin: any)=> {
        const index = coins.findIndex((object: any) => {
            return object.id === coin.id;
          });

        if (index !== -1) {
            setcoinObserver([...coins.slice(0, index),
                ...coins.slice(index + 1, coins.length)
            ])
        }
    }

    console.log(coins, 'COins')

    // bug in passing down coins but overall good progress

    return (
        <>
            <Information />
                <Grid container>
                    <Navbar coins={coins} />
                    <Grid item xs={6} direction='column'>
                    <CoinList coins={coins} updateCoins={addCoin} />
                    </Grid>

                    <Grid item xs={6} direction='column'>
                    {
                        coins.length > 0 ? (
                            <MyList coins={coins} deleteCoin={deleteCoin}/>
                        ) : (
                            <Typography>Not watching any coins</Typography>
                        )
                    }
                    
                    </Grid>
                </Grid>
        </>
        
    );
}

export default App;


