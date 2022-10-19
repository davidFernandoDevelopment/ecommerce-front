import { Route } from 'react-router-dom';

import { Cart } from '../../cart';
import { AuthRoutes } from '../../auth';
import { Header, Home, Content } from '../';
import { RoutesNotWithFound } from '../../../utilities';


//* VISTA PARA ECOMMERCE
const EcommerceRoutes = () => {
    return (
        <>
            <Header />
            <Cart />
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