import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Booking from '../Booking/Booking';

const AvailableAppointments = ({date}) => {
  const bookings = [
    {
      id: 1,
      name: 'Teeth Orthodonics',
      time: '08:00  AM - 10:00 AM',
      space: 10
    },
    {
      id: 2,
      name: 'Cosmetic Dentistry',
      time: '09:00  AM - 10:00 AM',
      space: 8
    },
    {
      id: 3,
      name:'Teeth Cleaning',
      time: '10:00  AM - 11:00 PM',
      space: 9
    },
    {
      id: 4,
      name: 'Cavity Protection',
      time: '11:00  AM - 12:00 PM',
      space: 5
    },
    {
      id: 5,
      name: 'Pediatric Dental',
      time: '06:00  PM - 07:00 PM',
      space: 10
    },
    {
      id: 6,
      name: 'Oral Surgery',
      time: '07:00  AM - 08:00 PM',
      space: 10
    },
  ]

  const cart = [
    {name: "ashik", quantity: "1"},
    {name: "bijoy", quantity: "2"},
  ]
  const newCart  = [cart, {name: "rakib", quantity:"3"}]



  return (
    <Container>
      
      <Typography variant='h3' sx={{my:2, fontWeight:600}}>Available Appointments: {date.toDateString()} <hr/></Typography>
      <Grid container spacing={2}>
      {
        bookings.map((booking)=> <Booking 
        date={date}
        key={booking.id} 
        booking={booking}
        ></Booking>)
      }

    </Grid>
    </Container>
  )
}

export default AvailableAppointments;