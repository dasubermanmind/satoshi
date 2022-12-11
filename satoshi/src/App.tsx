import React, { ReactElement, useState } from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import CoinList from "./components/CoinList/CoinList";
import MyList from './components/MyList/MyList';


function App(): ReactElement {
    const [coins, setcoinObserver] = useState([]);
    console.log(coins)

    return (
        <>
            <Grid container spacing={2}>
                <Navbar />
                <Information />
                <Grid item xs={8}>
                <CoinList coins={coins} updateCoins={setcoinObserver} />
                </Grid>

                <Grid item xs={4}>
                {
                    coins.length > 0 ? (
                        <MyList coins={coins} />
                    ) : (
                        <></>
                    )
                }
                </Grid>
            </Grid>
        </>
        
    );
}

export default App;


