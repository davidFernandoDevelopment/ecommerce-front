import { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { VscListFilter } from 'react-icons/vsc';

import './products.scss';
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
    const { startGetCategory } = useCategoryStore();
    const [category, setCategory] = useState<string>('');

    const q = useQuery(setCategory);
    useHiddenBottomBar(() => {
        if (q) startGetCategory(q);
    }, [q]);


    const handleCart = () => uiStateService.setSubject(true);

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
                    className='products__search'
                    onValue={() => { }}
                />
            </HeaderAction>
            <Container className='products__container'>
                <h1 className='products__title'>{category}</h1>
                <Section className='products__section'>
                    {
                        currentCategory.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))
                    }
                </Section>
            </Container>
        </div>
    );
};
export default Products;