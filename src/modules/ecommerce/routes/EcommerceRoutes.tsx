import { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Cart } from '../../cart';
import { AuthRoutes } from '../../auth';
import { BottomBarEcco } from '../../../ui';
import { Header, Home, Content, SearchProducts } from '../';
import { Categories } from '../../category';
import { RoutesNotWithFound } from '../../../utilities';
import { ProductRoutes, useProductStore } from '../../product';
import { Favorites } from '../../favorites';


//* VISTA PARA ECOMMERCE
const EcommerceRoutes = () => {
    const { startSetProducts, products } = useProductStore();

    useEffect(() => {
        if (!products.length) startSetProducts();
        //eslint-disable-next-line
    }, []);


    return (
        <>
            <Header />
            <Cart />
            <Content>
                <RoutesNotWithFound path=''>
                    <Route index element={<Home />} />
                    <Route path='categories' element={<Categories />} />
                    <Route path='products/*' element={<ProductRoutes />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='auth/*' element={<AuthRoutes />} />
                    <Route path='search' element={<SearchProducts />} />
                </RoutesNotWithFound>
            </Content>
            <BottomBarEcco />
        </>
    );
};

export default EcommerceRoutes;