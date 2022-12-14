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
        
        coins.length > 0 ? (
           coins.map((coin, index)=>{
                return <Typography key={index}>My coin{coin}</Typography>
           }) 
        ) : (
            <>No dashboard for you</>
        )
               }
        </>
    );
}

export default Dashboard;