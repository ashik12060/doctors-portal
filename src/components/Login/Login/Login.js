import { Container, Grid, TextField, Typography, Button,CircularProgress, Alert } from '@mui/material'
import React, { useState } from 'react'
import img from '../../../images/login.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, signInWithGoogle, isLoading,loginUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    };
  
    const handleGoogleSignIn = ()=>{
        signInWithGoogle(location, navigate)
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
                            <Button variant='text'>New User? Please Register</Button></NavLink>
                            {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congratulations! User Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                    </form>
                    <p>-----------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign in</Button>

                   
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
    )
}

export default Login