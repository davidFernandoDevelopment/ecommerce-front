import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import './header.scss';
import { SearchResult } from '../';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store/useStore';
import { Appbar, Badge, IconButton, Menu, MenuItem, MenuList, Toolbar } from '../../../../bemit/components';



const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];


const Header = () => {
    const refHeader = useRef<HTMLHeadElement>(null);
    const {
        product: { products },
        cart: { products: productsCart } } = useAppSelector(state => state);

    const handleCart = () => uiStateService.setSubject(true);
    const handleTheme = () => document.body.classList.toggle('dark-theme');
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

                <SearchResult
                    products={products}
                    onOpenSearch={handleOpenSearch}
                />
            </Toolbar>
        </Appbar >
    );
};

export default Header;