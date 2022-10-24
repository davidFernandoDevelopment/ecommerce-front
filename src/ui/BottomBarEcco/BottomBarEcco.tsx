import { useEffect, useRef } from 'react';
import { FiSettings } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BiHomeAlt, BiCategory } from 'react-icons/bi';

import './bottom-bar-ecco.scss';
import { BottomBar } from '../../bemit/components';


const values = [
    { icon: <BiHomeAlt />, path: '', text: 'Inicio', index: 1 },
    { icon: <BiCategory />, path: 'categories', text: 'categorias', index: 2 },
    { icon: <AiOutlineHeart />, path: 'favorites', text: 'Favoritos', index: 3 },
    { icon: <AiOutlineUser />, path: 'auth', text: 'Perfil', index: 4 },
];
const withoutBottomBar = ['/products'];

const BottomBarEcco = () => {
    const p = 'ecco';
    const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        withoutBottomBar.includes(location.pathname)
            ? ref.current?.classList.add(`${p}-bottom-bar--hidden`)
            : ref.current?.classList.remove(`${p}-bottom-bar--hidden`);
    }, [location]);

    return (
        <BottomBar
            p={p}
            ref={ref}
            data={values}
        />
    );
};
export default BottomBarEcco;