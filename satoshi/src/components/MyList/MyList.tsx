

import { Button, Card, CardContent, Checkbox, Typography } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react'

interface coinProps {
    coins: any;
    deleteCoin: any;
}

const MyList = ({ coins, deleteCoin }: coinProps): ReactElement => {
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

