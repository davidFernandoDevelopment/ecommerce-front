import { useEffect } from 'react';

import './categories.scss';
import { useCategoryStore } from '../../store';
import { HeaderAction } from '../../../ecommerce';
import { Search } from '../../../../bemit/components';
import CardCategory from '../../ui/CardCategory/CardCategory';
import { Container, Section } from '../../../../bemit/objects';



const Categories = () => {
    const {
        categories, resultCategories, startSetCategories, syncSearchCategory
    } = useCategoryStore();

    useEffect(() => {
        if (!categories.length) startSetCategories();

        return () => {
            syncSearchCategory('');
        };
        //eslint-disable-next-line
    }, []);


    const searchCategory = (category: string) => {
        syncSearchCategory(category);
    };

    return (
        <div className='categories  animate__animated animate__bounceInUp'>
            <HeaderAction className='categories__header' title='Categorias' />
            <Container className='categories__content'>
                <Search
                    keepOpen
                    onValue={searchCategory}
                    title='Que producto desea buscar'
                />
                <div>

                </div>

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
                    {
                        resultCategories.map(category => (
                            <CardCategory
                                key={category}
                                category={category}
                            />
                        ))
                    }
                    {
                        resultCategories.map(category => (
                            <CardCategory
                                key={category}
                                category={category}
                            />
                        ))
                    }
                    {
                        resultCategories.map(category => (
                            <CardCategory
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </Section>
            </Container>
        </div>
    );
};
export default Categories;