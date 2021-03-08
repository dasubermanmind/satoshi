import React, { ReactElement } from 'react';
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import CoinList from "./components/CoinList/CoinList";

function App(): ReactElement {
    return (
        <Container maxWidth="sm">
            <Navbar />
            <Information />
            <CoinList />
        </Container>
    );
}

export default App;
