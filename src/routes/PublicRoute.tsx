import { Navigate, Outlet } from 'react-router-dom';


const PublicRoute = () => {

    const status = 'not-authenticated';

    return (
        status === 'not-authenticated'
            ? <Outlet />
            : <Navigate to='/' />
    );
};

export default PublicRoute;