import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const Appointments = () => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
       const  url = `http://localhost:5000/appointments?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setAppointments(data));

    },[])
  return (
    <Box>
        <h1>Appointments: {appointments.length}</h1>

        <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.patientName}
              </TableCell>
              
              <TableCell align="left">{row.serviceName}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    </Box>
  )
}

export default Appointments;