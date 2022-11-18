import { useLayoutEffect, useState, useCallback } from 'react';

import './categories.scss';
import { Spinner } from '../../../../ui';
import { useQuery } from '../../../../hooks';
import { useCategoryStore } from '../../store';
import { HeaderAction } from '../../../ecommerce';
import { Search } from '../../../../bemit/components';
import CardCategory from '../../ui/CardCategory/CardCategory';
import { Container, Section } from '../../../../bemit/objects';



const Categories = () => {
    const {
        categories, resultCategories,
        startSetCategories, syncSearchCategory
    } = useCategoryStore();

    const query = useQuery();
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if (query && categories.length > 0) searchCategory(query);
        //eslint-disable-next-line
    }, [query, categories]);

    useLayoutEffect(() => {
        setLoading(true);
        startSetCategories()
            .then(_ => setLoading(false));

        return () => {
            syncSearchCategory('');
        };
        //eslint-disable-next-line
    }, []);


    const searchCategory = (category: string) => {
        console.log('first');
        syncSearchCategory(category);
        setLoading(false);
    };

    const handleDebounce = useCallback(() => setLoading(true), []);

    return (
        <div className='categories  animate__animated animate__bounceInUp'>
            <HeaderAction className='categories__header' title='Categorias' />
            <Container className='categories__content'>
                <Search
                    keepOpen
                    debounce={800}
                    initialValue={query}
                    onValue={searchCategory}
                    onDebounce={handleDebounce}
                    className='categories__search'
                    title='Que producto desea buscar'
                />
                {
                    loading
                        ? <Spinner />
                        : (
                            <Section
                                title={`${!resultCategories.length ? 'No hay resultados' : ''}`}
                            >
                                {
                                    resultCategories.map(category => (
                                        <CardCategory
                                            key={category}
                                            category={category}
                                        />
                                    ))
                                }
                            </Section>
                        )
                }
            </Container>
        </div>
    );
};
export default Categories;