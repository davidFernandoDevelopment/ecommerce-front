import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { PUBLIC_ROUTES } from './routes';

const PrivateRoute = () => {
  const status = 'authenticated';
  const location = useLocation();

  console.log({ location });

  return (
    status === 'authenticated'
      ? <Outlet />
      : <Navigate replace to={PUBLIC_ROUTES.LOGIN[1]} />
  );
};

export default PrivateRoute;