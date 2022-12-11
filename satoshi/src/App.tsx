import React, { ReactElement, useState } from 'react';
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import CoinList from "./components/CoinList/CoinList";
import MyList from './components/MyList/MyList';


function App(): ReactElement {
    const [coins, setcoinObserver] = useState([]);
    console.log(coins)

    return (
        <Container maxWidth="sm">
            <Navbar />
            <Information />
            <CoinList coins={coins} updateCoins={setcoinObserver} />
            <MyList coins={coins} />
            {/* <MainRoutes /> */}
        </Container>
    );
}

export default App;
