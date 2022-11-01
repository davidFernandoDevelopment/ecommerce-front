import { useRef } from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import './header.scss';
import { Container } from '../../../../bemit/objects';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store/useStore';
import { Appbar, Badge, IconButton, Menu, MenuItem, MenuList, Search, Toolbar } from '../../../../bemit/components';



const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];
const buscados = ['Lacteos', 'Menestras', 'Azucar', 'Detergentes', 'Lejias', 'Conservas', 'Arroces', 'Aceites', 'Limpieza'];


const Header = () => {
    const ref = useRef<HTMLElement>(null);
    const refHeader = useRef<HTMLHeadElement>(null);
    const { products } = useAppSelector(state => state.cart);


    const handleCart = () => {
        uiStateService.setSubject(true);
    };

    const handleTheme = () => document.body.classList.toggle('dark-theme');

    const handleSearch = (value: string) => {
        if (!value) return;
        console.log(value);
    };

    const handleOpenSearch = (open: boolean) => {
        open
            ? refHeader.current?.classList.add('is-open-search')
            : refHeader.current?.classList.remove('is-open-search');
    };

    return (
        <Appbar ref={refHeader} className='header'>
            <Toolbar className='header_container'>
                <Link to='/' className='header__logo'>
                    <i className="uil uil-watch-alt header__logo-icon"></i>
                    Tienda Sánchez
                </Link>

                <Menu ref={ref}>
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
                        <Badge badgeContent={products.length}>
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
                    onValue={handleSearch}
                    onOpen={handleOpenSearch}
                    className='header__search'
                    debounce={800}
                />
                <div className='header-results'>
                    <Container className='header-results__container'>
                        <h3 className='header-results__title'>Términos más buscados</h3>
                        <MenuList className='header-results__list'>
                            {
                                buscados.map((kw, i) => (
                                    <MenuItem key={i}>{kw}</MenuItem>
                                ))
                            }
                        </MenuList>
                    </Container>
                </div>
            </Toolbar>
        </Appbar >
    );
};

export default Header;