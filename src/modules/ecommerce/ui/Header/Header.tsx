import { useRef } from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';

import './header.scss';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store/useStore';
import { Appbar, Badge, IconButton, Menu, MenuItem, MenuList, Search, Toolbar } from '../../../../bemit/components';


const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];

const Header = () => {
    const ref = useRef<HTMLElement>(null);
    const refHeader = useRef<HTMLHeadElement>(null);
    const { products } = useAppSelector(state => state.cart);

    const handleCart = () => {
        uiStateService.setSubject(true);
    };

    const handleSearch = (value: string) => {

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
                    <IconButton className='header__icon'>
                        <MdOutlineDarkMode />
                    </IconButton>
                </div>
                <Search
                    onValue={handleSearch}
                    onOpen={handleOpenSearch}
                    className='header__search'
                />
                <div className='header__results'></div>
            </Toolbar>
        </Appbar >
    );
};

export default Header;;;