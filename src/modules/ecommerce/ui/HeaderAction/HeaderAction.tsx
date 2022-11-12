import { FC } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './header-action.scss';
import { Appbar, IconButton, Toolbar } from '../../../../bemit/components';
import { useNavigate } from 'react-router-dom';


interface Props {
    className?: string;
    title?: string;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIconButton?: React.ReactNode;
    position?: 'relative' | 'fixed';
    mainAction?: (...args: any[]) => any;
    secondaryAction?: (...args: any[]) => any;
}

const HeaderAction: FC<Props> = ({
    title,
    className,
    mainAction,
    secondaryAction,
    position = 'relative',
    endIcon,
    endIconButton,
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

    const secondaryClick = () => secondaryAction && secondaryAction();

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
                {
                    endIcon && (
                        <IconButton
                            onClick={secondaryClick}
                            className='header-action__icon-button'
                        >
                            {endIcon}
                        </IconButton>
                    )
                }
                {endIconButton}
            </Toolbar>
        </Appbar>
    );
};
export default HeaderAction;