import React, { useEffect, useState } from 'react';
import TourCard from './TourCard/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

const Home = () => {
    const [cities,setCities] = useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCities(data))
    },[])
   
    return (
        <div>
            <Container>
                <Grid container spacing={1}>
                    {
                        cities.map(city => 
                        <>
                            <Typography
                                variant="h4"
                                component="h2"
                                marginBottom={3}
                                marginTop={5}
                            >
                                {city.name}
                            </Typography>
                            <Grid container spacing={5}>
                                {city.tours.map((tour) => (
                                <TourCard tour={tour} />
                                ))}
                            </Grid>
                        </>
                    )
                }
                    
                </Grid>
            </Container>
        </div>
    );
};

export default Home;