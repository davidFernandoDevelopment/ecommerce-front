import { Routes, Route } from 'react-router-dom';

import { PanelRoutes } from '../modules/panel';
import { PRIVATE_ROUTES, PrivateRoute } from './';
import { EcommerceRoutes } from '../modules/ecommerce';


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<EcommerceRoutes />} />
      <Route element={<PrivateRoute />}>
        <Route path={`${PRIVATE_ROUTES.PANEL}/*`} element={<PanelRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;