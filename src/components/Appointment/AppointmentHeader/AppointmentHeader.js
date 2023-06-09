import { Container, Grid, Typography } from '@mui/material'
import React from 'react';

import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date, setDate}) => {
  return (
    <Container>
      <Grid container item spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            <img src={chair} style={{width:"100%"}} alt="" />
          </Typography>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default AppointmentHeader