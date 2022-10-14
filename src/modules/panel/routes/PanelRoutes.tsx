import { Route } from 'react-router-dom';

import { Dashboard } from '../pages';
import { Sidebar, Header } from '../ui';
import { RoutesNotWithFound } from '../../../utilities';


const PanelRoutes = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <RoutesNotWithFound path=''>
        <Route index element={<Dashboard />} />
      </RoutesNotWithFound>
    </>
  );
};

export default PanelRoutes;