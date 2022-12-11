

import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'

interface coinProps {
    coins: string[];
}

const MyList = ({ coins }: coinProps): ReactElement => {
    return (
        <>
            {
                coins.map((coin: any)=>{
                    coin
                })
            }
        </>
    );
}

export default MyList;

