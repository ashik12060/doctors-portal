import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
  const {id,title, img} = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
        <CardMedia
        component="img"
        style={{width: 'auto', height: '80px', margin:'0 auto'}}
        image={img}
        alt='grean iguna'
        >

        </CardMedia>
        <CardContent>
          
          <Typography variant="h5" component="div">
            Id: {id}
          </Typography>
          
          <Typography variant="body2">
          Title: {title}
            
          </Typography>
        </CardContent>
        
      </Card>
    </Grid>
  )
}

export default Service;