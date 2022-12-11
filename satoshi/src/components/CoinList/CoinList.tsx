import React, { ReactElement, useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { CircularProgress } from "@material-ui/core";
import Coin from "./Coin/Coin";
import { coin } from '../../types/types';

const CoinList = (): ReactElement => {
    const [{ data, loading, error }] = useAxios(
        {
            url: 'https://api.coingecko.com/api/v3/coins/list',
            method: 'GET'
        }, { manual: false });

    useEffect(() =>{
        if (error){
            console.log('error has happened', error);
        }
    },[error]);

    const [coinObserver, setcoinObserver] = useState<any>([{}])

    // Add to the specialized list to keep track of. 
    const addToListCallback = (id: string, name: string)=> {
        setcoinObserver([...coinObserver, {id, name}]);
    }

    return (
        <>
            {
                loading ?  ( <CircularProgress /> ) :
                    data && data.map((coin: coin) => (
                        <Coin
                            id={coin.id}
                            symbol={coin.symbol}
                            name={coin.name}
                            addToListCallback={addToListCallback}
                            />
                        ))
            }
        </>
    );
}

export default CoinList;