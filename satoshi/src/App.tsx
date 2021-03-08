import React, { ReactElement } from 'react';
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";

function App(): ReactElement {
    return (
        <Container maxWidth="sm">
            <Navbar />
            <Information />
        </Container>
    );
}

export default App;
