import { useRef } from 'react';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import './header.scss';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store/useStore';
import { Appbar, Badge, Button, IconButton, Menu, MenuItem, MenuList, Toolbar } from '../../../../bemit/components';


const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];

const Header = () => {
    const { products } = useAppSelector(state => state.cart);
    const ref = useRef<HTMLElement>(null);

    const handleCart = () => {
        uiStateService.setSubject(true);
    };

    return (
        <Appbar>
            <Toolbar>
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
                    <Link to='/auth/login'>
                        <Button size='small'>
                            Login
                        </Button>
                    </Link>
                </div>
            </Toolbar>
        </Appbar >
    );
};

export default Header;;;