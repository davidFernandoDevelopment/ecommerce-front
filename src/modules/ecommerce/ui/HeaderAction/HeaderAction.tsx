import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './header-action.scss';
import { Appbar, IconButton, Toolbar } from '../../../../bemit/components';


interface Props {
    title?: string;
    className?: string;
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    position?: 'relative' | 'fixed';
    mainAction?: (...args: any[]) => any;
}

const HeaderAction: FC<Props> = ({
    title,
    children,
    className,
    mainAction,
    position = 'relative',
    startIcon = <AiOutlineArrowLeft />,
}) => {
    const history = useNavigate();

    const mainClick = () => {
        if (mainAction) {
            mainAction();
            return;
        }
        history(-1);
    };

    return (
        <Appbar className={className} position={position}>
            <Toolbar className='header-action__container'>
                {
                    startIcon && (
                        <IconButton
                            onClick={mainClick}
                            className='header-action__icon-button'
                        >
                            {startIcon}
                        </IconButton>
                    )
                }
                {title && <h3 className='header-action__title'>{title}</h3>}
                {children}
            </Toolbar>
        </Appbar>
    );
};
export default HeaderAction;