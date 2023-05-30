import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import {Container, Button, Grid, Typography, Box } from '@mui/material';


const bannerBg= {
    background: `url(${bg})`,
    backgroundColor: 'rgba(232, 241, 239 )',
    marginTop: 16,
    

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{flexGrow: 1 }}>
            <Grid  container spacing={2}>
            <Grid  style={{...verticalCenter,textAlign:'left', paddingLeft:15}} xs={12} md={6} >
                <Box>
                <Typography variant="h3" >
                    Your New Smile <br/> Starts Here
                </Typography>
                <Typography  variant="h6" sx={{my:3,fontSize:14, color:'gray', fontWeight:300}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing export default class 
                lorem23P
                Lorem ipsum dolor sit amet, consectetur adipiscing export default class 
                lorem23P
                
                </Typography>
                <Button variant='contained' sx={{backgroundColor:'#1BB294'}}>Get Appointment </Button>
                </Box>
            </Grid>
            <Grid style={verticalCenter} xs={12} md={6}>
                <img style={{width:"350px"}} src={chair} alt="chair img" />
            </Grid>
            
        </Grid>
        </Container>
    )
}

export default Banner;