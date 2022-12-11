

import { Card, CardContent, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'

interface coinProps {
    coins: any;
}


const MyList = ({ coins }: coinProps): ReactElement => {
    return (
        <>
            <p>Watching: </p>
            {
                coins && coins.map((datum: any, index: any)=>{
                  return (
                    <Card>
                        <CardContent>
                             <Typography key={index}>Selected: {datum.name}</Typography>
                        </CardContent>
                    </Card>
                  )
                })
            }
        </>
    );
}

export default MyList;
