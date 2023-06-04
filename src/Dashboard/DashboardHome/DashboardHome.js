import React from 'react'
import Appointments from "../Appointments/Appointments";
import { Grid } from '@mui/material';

const DashboardHome = () => {
  return (
    <Grid container spacing={2}>
            <Grid item xs={12} sm={7} md={8}>
                <Appointments/>
            </Grid>
          </Grid>
  )
}

export default DashboardHome