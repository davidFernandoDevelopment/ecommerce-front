import { useEffect } from 'react';

import './home.scss';
import { useProductStore } from '../../product';
import { Section } from '../../../bemit/objects';
import { BottomBarEcco, CardProduct, MainProduct, NewsLetter } from '../ui';


const Home = () => {
    const { startSetProducts, products } = useProductStore();

    useEffect(() => {
        if (!products.length) startSetProducts();
        //eslint-disable-next-line
    }, []);

    return (
        <div className='home'>
            <MainProduct />
            <Section title='Ofertas de la semana'>
                {
                    products.slice(4, 8).map((product, index) => (
                        <CardProduct
                            key={index}
                            offerProduct='- 50%'
                            product={product}
                        />
                    ))
                }
            </Section>
            <Section title='Productos más comprados'>
                {
                    products.slice(4, 8).map((product, index) => (
                        <CardProduct
                            key={index}
                            product={product}
                        />
                    ))
                }
            </Section>
            <Section title='Nuevos productos'>
                {
                    products.slice(0, 4).map((product, index) => (
                        <CardProduct
                            newProduct
                            key={index}
                            product={product}
                        />
                    ))
                }
            </Section>
            <NewsLetter />
            <BottomBarEcco />
        </div>
    );
};

export default Home;