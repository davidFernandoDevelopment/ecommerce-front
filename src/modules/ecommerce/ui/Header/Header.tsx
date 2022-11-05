import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import './header.scss';
import { CardProductSearch, NotFound, Searching } from '../';
import { Product } from '../../../product';
import { Container } from '../../../../bemit/objects';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store/useStore';
import { Appbar, Badge, IconButton, Menu, MenuItem, MenuList, Search, Toolbar } from '../../../../bemit/components';



const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];
const buscados = ['Azucar', 'Detergentes', 'Lejias', 'Conservas', 'Arroces', 'Aceites', 'Limpieza'];


type State = 'loading' | 'not-found' | 'ok' | 'default';
const Header = () => {
    const refHeader = useRef<HTMLHeadElement>(null);
    const [state, setState] = useState<State>('default');
    const {
        product: { products },
        cart: { products: productsCart } } = useAppSelector(state => state);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleCart = () => uiStateService.setSubject(true);
    const handleTheme = () => document.body.classList.toggle('dark-theme');

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

    const handleOpenSearch = (open: boolean) => {
        if (open) {
            document.body.style.overflow = 'hidden';
            refHeader.current?.classList.add('is-open-search');
            return;
        }

        document.body.style.overflow = 'auto';
        refHeader.current?.classList.remove('is-open-search');
    };

    return (
        <Appbar ref={refHeader} className='header'>
            <Toolbar className='header_container'>
                <Link to='/' className='header__logo'>
                    <i className="uil uil-watch-alt header__logo-icon"></i>
                    Tienda Sánchez
                </Link>

                <Menu>
                    <MenuList>
                        {
                            options.map(({ label, path }) => (
                                <MenuItem key={label}>
                                    {label}
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Menu>

                <div className='header__buttons'>
                    <IconButton
                        onClick={handleCart}
                        className='header__icon'
                    >
                        <Badge badgeContent={productsCart.length}>
                            <BiCart />
                        </Badge>
                    </IconButton>
                    <IconButton
                        onClick={handleTheme}
                        className='header__icon'
                    >
                        <MdOutlineLightMode />
                        <MdOutlineDarkMode />
                    </IconButton>
                </div>

                <Search
                    debounce={500}
                    onValue={handleSearch}
                    depOnValue={[products]}
                    onOpen={handleOpenSearch}
                    className='header__search'
                />
                <div className='header-results'>
                    <Container className='header-results__container'>
                        {
                            state === 'ok' && (<>
                                {
                                    filteredProducts.map((p, i) => (
                                        <CardProductSearch key={p.id} {...p} />
                                    ))
                                }
                                <Link to='/' className='header-results__more'>Mas resultados</Link>
                            </>)
                        }
                        {
                            state === 'default' && (
                                <>
                                    <h3 className='header-results__title'>Términos más buscados</h3>
                                    <MenuList className='header-results__list'>
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
            </Toolbar>
        </Appbar >
    );
};

export default Header;