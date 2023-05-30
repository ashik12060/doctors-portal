import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children}) => {
    const {user,isLoading} = useAuth();
    if(isLoading) return <CircularProgress />
  return user.email? children : <Navigate to='/login' state={{ from: Location }}/>
}

export default PrivateRoute;