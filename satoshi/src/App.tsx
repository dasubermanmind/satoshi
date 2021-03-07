import React, {ReactElement} from 'react';
import {Box, Container, Typography} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";

function App(): ReactElement {
    return (
        <Container maxWidth="sm">
            <Navbar />
        </Container>
    );
}

export default App;
