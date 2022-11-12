import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import './search-result.scss';
import { Product } from '../../../product';
import { Container } from '../../../../bemit/objects';
import { CardProductSearch, NotFound, Searching } from '../';
import { MenuItem, MenuList, Search } from '../../../../bemit/components';


interface Props {
    products: Product[];
    onOpenSearch: (open: boolean) => void;
}
type State = 'loading' | 'not-found' | 'ok' | 'default';
const buscados = ['Azucar', 'Detergentes', 'Lejias', 'Conservas', 'Arroces', 'Aceites', 'Limpieza'];


const SearchResult: FC<Props> = ({ onOpenSearch, products }) => {
    const [state, setState] = useState<State>('default');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);


    const handleSearch = (value: string) => {
        if (!value) {
            setState('default');
            setFilteredProducts([]);
            return;
        };
        setState('loading');

        console.log({ products, value });
        //* TAREA ASINCRONA.
        setTimeout(() => {
            let result = products.filter(p => p.category.toLowerCase().includes(value.toLowerCase()));
            setFilteredProducts(result);
            result.length
                ? setState('ok')
                : setState('not-found');

        }, 1000);
    };

    return (
        <>
            <Search
                debounce={500}
                onValue={handleSearch}
                depOnValue={[products]}
                onOpen={onOpenSearch}
                className='search-result__search'
            />
            <div className='search-result__results'>
                <Container className='search-result__container'>
                    {
                        state === 'ok' && (<>
                            {
                                filteredProducts.map(p => (
                                    <CardProductSearch key={p.id} {...p} />
                                ))
                            }
                            <Link to='/' className='search-result__more'>Mas resultados</Link>
                        </>)
                    }
                    {
                        state === 'default' && (
                            <>
                                <h3 className='search-result__title'>Términos más buscados</h3>
                                <MenuList className='search-result__list'>
                                    {
                                        buscados.map((kw, i) => (
                                            <MenuItem key={i}>{kw}</MenuItem>
                                        ))
                                    }
                                </MenuList>
                            </>
                        )
                    }
                    {
                        state === 'not-found' &&
                        <NotFound
                            img='https://thumbs.dreamstime.com/b/upset-magnifying-glass-cute-not-found-symbol-unsuccessful-s-upset-magnifying-glass-cute-not-found-symbol-unsuccessful-122205900.jpg'
                            text='NO SE ENCONTRO RESULTADO'
                        />
                    }
                    {
                        state === 'loading' &&
                        <Searching />
                    }
                </Container>
            </div>
        </>
    );
};
export default SearchResult;