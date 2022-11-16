import './search-products.scss';
import { Container, Section } from '../../../../bemit/objects';
import { useHiddenBottomBar, useQuery } from '../../../../hooks';
import { useLayoutEffect, useState } from 'react';
import { useAppSelector } from '../../../../store';
import { Product } from '../../../product';
import { CardProduct } from '../../ui';
import { Spinner } from '../../../../ui';



const SearchProducts = () => {
    const [word, setWord] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchProducts, setSearchProducts] = useState<Product[]>([]);
    const { product: { products } } = useAppSelector(state => state);

    const q = useQuery(setWord);

    useHiddenBottomBar(() => {
        if (q) setWord(q);
    }, [q]);

    useLayoutEffect(() => {
        if (word) {
            setLoading(true);
            setTimeout(() => {
                let result = products.filter(p => p.category.toLowerCase().includes(word.toLowerCase()));
                console.log({ word, result, products });
                setSearchProducts(result);
                setLoading(false);
            }, 1000);
        }
    }, [word, products]);


    return (
        <div className='search-products animate__animated animate__fadeIn'>
            <Container>
                <p className='search-products__title'>
                    Resultados de busqueda para:
                    <br />
                    <b className='search-products__word'>
                        "{word}"  {loading ? '( Calculando... )' : `( ${searchProducts.length} productos )`}
                    </b>
                </p>

                {
                    loading
                        ? <Spinner />
                        : (
                            <Section className='search-products__section'>
                                {
                                    searchProducts
                                        .map(product => (
                                            <CardProduct key={product.id} product={product} />
                                        ))
                                }
                            </Section>
                        )
                }
            </Container>
        </div>
    );
};
export default SearchProducts;