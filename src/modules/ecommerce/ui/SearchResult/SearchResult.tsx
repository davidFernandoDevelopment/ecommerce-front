import { FC, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [state, setState] = useState<State>('default');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleSubmit = useCallback((query: string) => {
        console.log('onSubmit !!!');
        document.body.style.overflow = 'auto';
        document.querySelector('.c-search')?.classList.remove('is-active');
        document.querySelector('.header')?.classList.remove('is-open-search');
        navigate(`search?q=${query}`);
    }, [navigate]);

    const handleSearch = async (value: string) => {
        if (!value.trim()) {
            setState('default');
            setFilteredProducts([]);
            return;
        };

        console.log({ products, value });
        //* TAREA ASINCRONA.
        const result = await helper(value);
        console.log('hola mundo !!!');
        setFilteredProducts(result);
        result.length
            ? setState('ok')
            : setState('not-found');
    };
    const helper = (value: string): Promise<Product[]> => {
        return new Promise((resolve, _) => {
            setTimeout(() => {
                let result = products.filter(p => p.category.toLowerCase().includes(value.toLowerCase()));
                resolve(result);
            }, 1000);
        });
    };
    const handleDebounce = () => setState('loading');

    return (
        <>
            <Search
                debounce={500}
                onOpen={onOpenSearch}
                onValue={handleSearch}
                onSubmit={handleSubmit}
                onDebounce={handleDebounce}
                depOnValue={[products]}
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