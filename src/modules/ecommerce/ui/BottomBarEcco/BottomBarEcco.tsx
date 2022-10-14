import { BiHomeAlt } from 'react-icons/bi';
import { BsInboxes } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';

import './bottom-bar-ecco.scss';
import { BottomBar } from '../../../../bemit/components';


const values = [
    { icon: <BiHomeAlt />, path: '', text: 'Inicio' },
    { icon: <CgProfile />, path: '', text: 'Perfil' },
    { icon: <BsInboxes />, path: '', text: 'productos' },
    { icon: <BiHomeAlt />, path: '', text: 'Photos' },
    { icon: <FiSettings />, path: '', text: 'Settings' },
];

const BottomBarEcco = () => {
    return (
        <BottomBar p='bottom-bar-ecco' data={values} />
    );
};
export default BottomBarEcco;