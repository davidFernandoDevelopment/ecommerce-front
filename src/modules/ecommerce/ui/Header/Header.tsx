import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

import './header.scss';
import { Appbar, Button, IconButton, Menu, MenuItem, MenuList, Toolbar } from '../../../../bemit/components';


const options: { label: string; path: string; }[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Destacados', path: '/featureds' },
    { label: 'Productos', path: '/products' }
];


const Header = () => {

    const ref = useRef<HTMLElement>(null);

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
                    <IconButton className='header__icon'>
                        <BiCart />
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