import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        img: fluoride
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
        img: cavity
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        img: whitening
    },
]


const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 500, mt: 2, color: 'success.main' }} variant='h6' component='div'>
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, mb: 2 }} variant='h6' component='div'>
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default Services