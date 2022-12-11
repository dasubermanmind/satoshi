import React, { ReactElement, useEffect, useState } from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import CoinList from "./components/CoinList/CoinList";
import MyList from './components/MyList/MyList';


function App(): ReactElement {
    const [coins, setcoinObserver] = useState([]);

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

    return (
        <>
            <Information />
                <Grid container>
                    <Navbar />
                    
                    <Grid item xs={6} direction='column'>
                    <CoinList coins={coins} updateCoins={setcoinObserver} />
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


