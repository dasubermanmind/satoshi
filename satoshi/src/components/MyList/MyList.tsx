import { Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'

interface coinProps {
    coins: any;
    deleteCoin: any;
}

const MyList = ({ coins, deleteCoin }: coinProps): ReactElement => {
    return (
        <>
            {
                coins.length > 0 ? (
                    coins && coins.map((datum: any, index: any)=>{
                        return (
                          <Card>
                              <CardContent>
                                   <Typography key={index}>Selected: {datum.name}</Typography>
                                   <Button 
                                      onClick={()=>{deleteCoin(datum)}}
                                      size="small">Remove from watchlist</Button>
                              </CardContent>
                          </Card>
                        )
                      })
                )  : (
                    <></>
                )
            }
        </>
    );
}

export default MyList;

