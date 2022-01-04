import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import TourCard from '../TourCard/TourCard';

const Cities = () => {
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
                                key={city.id}
                            >
                                {city.name}
                            </Typography>
                            <Grid container spacing={5}>
                                {city.tours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
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

export default Cities;