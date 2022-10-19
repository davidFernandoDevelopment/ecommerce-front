import { AiOutlineArrowLeft } from 'react-icons/ai';

import './header-action.scss';
import { Appbar, IconButton, Toolbar } from '../../../../bemit/components';
import { FC } from 'react';


interface Props {
    className?: string;
}

const HeaderAction: FC<Props> = ({ className }) => {
    return (
        <Appbar position='relative' className={className}>
            <Toolbar className='header-action__container'>
                <IconButton className='header-action__icon-button'>
                    <AiOutlineArrowLeft />
                </IconButton>
                <h3 className='header-action__title'>Carrito de compras</h3>
            </Toolbar>
        </Appbar>
    );
};
export default HeaderAction;