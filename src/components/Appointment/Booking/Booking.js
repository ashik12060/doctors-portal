import { NearMe } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3}>
          <Typography
            sx={{ color: "#1BB294", pt: 2, fontWeight: 600 }}
            variant="h5"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {time}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {space} Space Available
          </Typography>
          <Button
            onClick={handleBookingOpen}
            sx={{ backgroundColor: "#1BB294 ", mb: 2 }}
            variant="contained"
          >
            Get Appointment{" "}
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess= {setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
