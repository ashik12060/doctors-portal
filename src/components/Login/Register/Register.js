import { Container, Grid, TextField, Typography, Button,CircularProgress, Alert } from '@mui/material';

import React, { useState } from 'react'
import img from '../../../images/login.png';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const {user,registerUser, isLoading,authError} = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        if(loginData.password !== loginData.password2){
            alert("Passwords do not match");
            return;
        }
        
        registerUser(loginData.name, loginData.email, loginData.password,navigate);
        console.log(loginData.email, loginData.password);
     
        e.preventDefault();
    }

  return (
    <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography sx={{ fontSize: 25 }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <hr style={{width:150, borderBottom:'1px solid black'}}/>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', mb: 5  }}
                            id="standard-basic"
                            label="Your name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="Your email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <br />
                        <TextField
                            sx={{ width: '75%', my: 5 }}
                            id="standard-basic"
                            label="Your password"
                            type='password'
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />
                        <TextField
                            sx={{ width: '75%', mb: 5 }}
                            id="standard-basic"
                            label="Retype Your password"
                            type='password'
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />
                        <br />


                        <Button sx={{ width: '75%', backgroundColor: '#1BB294', color: 'white', mb: 2}} variant="contained" type="submit">Register</Button>
                        <br/>

                        <NavLink
                            style={{ textDecoration: 'none'  }}
                            to="/login">
                            <Button variant='text'>Already Registered? Please Log in</Button></NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congratulations! User Register Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
}



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
  )
}

export default Register;