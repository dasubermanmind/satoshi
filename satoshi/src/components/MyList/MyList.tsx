

import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'

interface coinProps {
    coins: any;
}


const MyList = ({ coins }: coinProps): ReactElement => {
    console.log(coins, 'MYLIST')
    return (
        <>
            <p>My list</p>
            {
                coins && coins.map((datum: any, index: any)=>{
                  return <Typography key={index}>Selected: {datum.name}</Typography>
                })
            }
        </>
    );
}

export default MyList;

