import { FC } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './header-action.scss';
import { Appbar, IconButton, Toolbar } from '../../../../bemit/components';
import { useNavigate } from 'react-router-dom';


interface Props {
    className?: string;
    title: string;
    position?: 'relative' | 'fixed';
    fnAction?: (...args: any[]) => any;
}

const HeaderAction: FC<Props> = ({ title, className, position = 'relative', fnAction }) => {
    const history = useNavigate();

    const handleClick = () => {
        if (fnAction) {
            fnAction();
            return;
        }
        history(-1);
    };

    return (
        <Appbar className={className} position={position}>
            <Toolbar className='header-action__container'>
                <IconButton
                    onClick={handleClick}
                    className='header-action__icon-button'
                >
                    <AiOutlineArrowLeft />
                </IconButton>
                <h3 className='header-action__title'>{title}</h3>
            </Toolbar>
        </Appbar>
    );
};
export default HeaderAction;