import React from 'react';
import { useAuth } from './auth';
import { Navigate , useLocation } from 'react-router-dom';

function RequireAuth({children}) {
    const location = useLocation()
    const auth =useAuth()

    if(!auth.username){
        return <Navigate to="/login"  state= {{path:location.pathname}} />
    }
    return (
    
            children
    
    );
}

export default RequireAuth;