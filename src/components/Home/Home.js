import React from 'react';
import TourCard from './TourCard/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
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