import { Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';

interface DashboardProps{
    ids: any[];
    coins: any[];
}

const Dashboard = ({ids, coins}: DashboardProps)=>{
    console.log(ids, 'DashboardIDS')
    return(
        <>
            {
                ids && ids.map((id, index)=>{
                   return <Typography key={index}>THE IDS ARE{id}
                   {
                    coins && coins.map((coin, i)=>{
                        return <Typography key={i}>My coin{coin}</Typography>
                    })
                   }
                   </Typography>
                })
            }
        </>
    );
}

export default Dashboard;