import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const TourCard = ({tour}) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                {tour.name}
            </Paper>
        </Grid>
        
    );
};

export default TourCard;