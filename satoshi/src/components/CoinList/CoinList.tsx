import React, { ReactElement, useEffect } from "react";
import useAxios from "axios-hooks";
import { CircularProgress, Typography } from "@material-ui/core";
import Coin from "./Coin/Coin";
import { coin } from '../../types/types';

interface coinProps {
    coins: any;
    updateCoins: any;
}

const CoinList = ({ coins, updateCoins }: coinProps): ReactElement => {
    const [{ data, loading, error }] = useAxios(
        {
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&page=${page}&per_page=10',
            method: 'GET'
        }, { manual: false });

    useEffect(() =>{
        if (error){
            console.log('error has happened', error);
        }
    },[error]);

    
    return (
        <>
            {
                loading ?  ( <CircularProgress /> ) :
                    data && data.map((coin: coin, index: any) => (
                       <Typography key={index}>
                         <Coin
                            id={coin.id}
                            symbol={coin.symbol}
                            name={coin.name}
                            addToListCallback={(id, name)=>{
                                updateCoins(coin, id)
                            }}
                            />
                       </Typography>
                        ))
            }
        </>
    );
}

export default CoinList;