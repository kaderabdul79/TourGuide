import React, { useEffect, useState } from 'react';
import TourCard from './TourCard/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
    const [tours,setTours] = useState({})

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => console.log(data))

    },[])

    return (
        <div>
            this is home
            <Container>
                <Grid container spacing={2}>
                    <TourCard></TourCard>
                </Grid>
            </Container>
            
        </div>
    );
};

export default Home;