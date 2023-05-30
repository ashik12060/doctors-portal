import { Container, Grid, TextField, Typography, Button,CircularProgress, Alert } from '@mui/material'
import React, { useState } from 'react'
import img from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError,isLoading,loginUser} = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        //will start with 71-3
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography sx={{ fontSize: 25 }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <hr style={{width:150, borderBottom:'1px solid black'}}/>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="Your email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                            required />

                        <br />
                        <TextField
                            sx={{ width: '75%', my: 5 }}
                            id="standard-basic"
                            label="Your password"
                            type='password'
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                            required />
                        <br />


                        <Button sx={{ width: '75%', backgroundColor: '#1BB294', color: 'white', mb: 2}} variant="contained" type="submit">Login</Button>
                        <br/>

                        <NavLink
                            style={{ textDecoration: 'none'  }}
                            to="/register">
                            New User? Please Register</NavLink>
                            {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congratulations! User Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                    </form>

                   
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
    )
}

export default Login