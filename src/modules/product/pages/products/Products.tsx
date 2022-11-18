import { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { VscListFilter } from 'react-icons/vsc';

import './products.scss';
import { Spinner } from '../../../../ui';
import { useAppSelector } from '../../../../store';
import { uiStateService } from '../../../../services';
import { useCategoryStore } from '../../../category/store';
import { CardProduct, HeaderAction } from '../../../ecommerce';
import { Container, Section } from '../../../../bemit/objects';
import { useHiddenBottomBar, useQuery } from '../../../../hooks';
import { Badge, IconButton, Search } from '../../../../bemit/components';


const Products = () => {
    const {
        cart: { products },
        category: { currentCategory }
    } = useAppSelector(state => state);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const { startGetCategory } = useCategoryStore();

    const q = useQuery();
    useHiddenBottomBar(() => {
        setLoading(true);

        if (q) {
            startGetCategory(q)
                .then(_ => setLoading(false));
        };
    }, [q]);


    const handleDebounce = () => setLoading(true);
    const handleCart = () => uiStateService.setSubject(true);
    const handleSearch = (queryWord: string) => {
        setLoading(false);
        if (!queryWord) {
            setQuery('');
            return;
        };
        setQuery(queryWord);
        console.log({ queryWord });
    };

    return (
        <div className='products animate__animated animate__bounceInDown'>
            <HeaderAction className='products__header'>
                <div className='products__icons'>
                    <IconButton
                        onClick={handleCart}
                        className='header__icon'
                    >
                        <Badge badgeContent={products.length}>
                            <BiCart />
                        </Badge>
                    </IconButton>
                    <IconButton className='products__filter'>
                        <VscListFilter />
                    </IconButton>
                </div>
                <Search
                    debounce={500}
                    onValue={handleSearch}
                    onDebounce={handleDebounce}
                    className='products__search'
                />
            </HeaderAction>
            <Container className='products__container'>
                <h1 className='products__title'>{q}</h1>
                {
                    loading
                        ? <Spinner />
                        : (
                            <Section className='products__section'>
                                {
                                    currentCategory
                                        .filter(c => query ? c.title.toLowerCase().includes(query.toLowerCase()) : true)
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
export default Products;