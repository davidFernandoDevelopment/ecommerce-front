import { Navigate, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../routes';
import { Profile } from '../../user';
import { Login, Register, Panel } from '../pages';

const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path={PUBLIC_ROUTES.LOGIN[0]} element={<Login />} /> */}
      <Route index element={<Profile />} />
      <Route path={PUBLIC_ROUTES.REGISTER[0]} element={<Register />} />
      <Route path={PUBLIC_ROUTES.PANEL[0]} element={<Panel />} />

      {/* <Route path='*' element={<Navigate to={PUBLIC_ROUTES.LOGIN[0]} />} /> */}
    </Routes>
  );
};

export default AuthRoutes;