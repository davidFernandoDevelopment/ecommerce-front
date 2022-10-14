import { Route } from 'react-router-dom';

import { Header, Home, Content } from '../';
import { AuthRoutes } from '../../auth';
import { RoutesNotWithFound } from '../../../utilities';

//* VISTA PARA ECOMMERCE
const EcommerceRoutes = () => {
    return (
        <>
            <Header />
            <Content>
                <RoutesNotWithFound path=''>
                    <Route index element={<Home />} />
                    <Route path='auth/*' element={<AuthRoutes />} />
                </RoutesNotWithFound>
            </Content>
        </>
    );
};

export default EcommerceRoutes;