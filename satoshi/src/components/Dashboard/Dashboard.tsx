import { Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';

interface DashboardProps{
    coins: any[];
}

const Dashboard = ({ coins }: DashboardProps)=>{
    return(
        <>
            {
        
               coins && coins.map((coin, index)=>{
                return <Typography key={index}>My coin{coin}</Typography>
                }
               )}
        </>
    );
}

export default Dashboard;