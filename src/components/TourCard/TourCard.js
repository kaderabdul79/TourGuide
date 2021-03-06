import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const TourCard = ({tour}) => {

    // const history = useHistory()
    
    // const goForBoking = () => {
    //     const id = tour.id
    //onClick={goForBoking}
    //     history.push(`/booking/${id}`)
    //     // console.log(id)
    // }
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <Box>
                    <img style={{width: '100%', height: '6rem'}} src={tour.image} alt="" />
                    <Box>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box style={{textAlign: 'center'}}><Rating name="read-only" value={tour.rating} readOnly />{tour.numberOfReviews}</Box>
                        <Typography variant="subtitle1" component="h4">
                            Price : {tour.price}
                        </Typography>
                    </Box>
                    <Button style={{marginBottom: '8px'}}  
                        variant="contained">
                            Book Now
                    </Button>
                </Box>
            </Paper>
        </Grid>
        
    );
};

export default TourCard;