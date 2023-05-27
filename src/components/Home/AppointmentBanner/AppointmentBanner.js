import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import doctor from '../../../images/doctor.png';
import appointmentbg from '../../../images/bg.png';

import { Box, Button, Typography } from '@mui/material';


const AppointmentBg = {
    background: `url(${appointmentbg})`,
    backgroundColor: 'rgba(32, 52, 62 )',
    marginTop: 150,
}

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={AppointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{}}>
                    <Grid xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid xs={12} md={6} sx={{
                        display:'flex',
                        alignItems: 'center',
                        textAlign: 'left',

                    }}>
                        <Box>
                            <Typography variant='h6' sx={{mb:2,}} style={{ color: '#1BB294' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' style={{ color: 'white', }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h6' sx={{my:2,}} style={{ color: 'white', fontSize: '14', fontWeight: '500' }}>
                                lorem ipsum dolor sit amet, consectetur adip
                            </Typography>
                            <br />
                            <Button variant='contained' sx={{backgroundColor: '#1BB294'}}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AppointmentBanner