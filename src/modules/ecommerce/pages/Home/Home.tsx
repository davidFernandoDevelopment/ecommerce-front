import './home.scss';
import { useProductStore } from '../../../product';
import { Container, Section } from '../../../../bemit/objects';
import { CardProduct, MainProduct, NewsLetter } from '../../ui';


const Home = () => {
    const { products } = useProductStore();

    return (
        <Container className='home animate__animated animate__fadeIn'>
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
        </Container>
    );
};

export default Home;