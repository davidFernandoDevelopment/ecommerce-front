import { Route } from 'react-router-dom';

import { Cart } from '../../cart';
import { AuthRoutes } from '../../auth';
import { Favorites, Products } from '../../product';
import { BottomBarEcco } from '../../../ui';
import { Header, Home, Content } from '../';
import { Categories } from '../../category';
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
                    <Route path='categories' element={<Categories />} />
                    <Route path='products' element={<Products />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='auth/*' element={<AuthRoutes />} />
                </RoutesNotWithFound>
            </Content>
            <BottomBarEcco />
        </>
    );
};

export default EcommerceRoutes;