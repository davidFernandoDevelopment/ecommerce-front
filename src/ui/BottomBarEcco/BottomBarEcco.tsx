import { BiHomeAlt, BiCategory } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

import './bottom-bar-ecco.scss';
import { BottomBar } from '../../bemit/components';


const values = [
    { icon: <BiHomeAlt />, path: '', text: 'Inicio', index: 1 },
    { icon: <BiCategory />, path: 'categories', text: 'categorias', index: 2 },
    { icon: <AiOutlineHeart />, path: 'favorites', text: 'Favoritos', index: 3 },
    { icon: <AiOutlineUser />, path: 'auth', text: 'Perfil', index: 4 },
];


const BottomBarEcco = () => {
    const p = 'ecco';

    return (
        <BottomBar
            p={p}
            data={values}
        />
    );
};
export default BottomBarEcco;