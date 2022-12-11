

import { Button, Card, CardContent, Checkbox, Typography } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react'

interface coinProps {
    coins: any;
}

const MyList = ({ coins }: coinProps): ReactElement => {

    console.log(coins, 'My coins')

    const deleteCoin = (coin: any)=> {
        const index = coins.findIndex((object: any) => {
            return object.id === coin.id;
          });

        console.log(index, 'Index')

        if (index !== -1) {
            coins.splice(index, 1);
        }
    }

    return (
        <>
            <p>Watching: </p>
            {
                coins && coins.map((datum: any, index: any)=>{
                  return (
                    <Card>
                        <CardContent>
                             <Typography key={index}>Selected: {datum.name}</Typography>
                             <Button 
                                onClick={()=>{deleteCoin(datum)}}
                                size="small">Delete</Button>
                        </CardContent>
                    </Card>
                  )
                })
            }
        </>
    );
}

export default MyList;
function useForceUpdate() {
    throw new Error('Function not implemented.');
}

