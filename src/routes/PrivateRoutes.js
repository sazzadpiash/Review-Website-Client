import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='font-bold text-4xl flex h-screen justify-center items-center'>
            <ClipLoader
                color="#ff014d"
                size={46}
            />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;