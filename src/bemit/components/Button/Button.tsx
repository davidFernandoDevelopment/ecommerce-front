import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import './c-button.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'smaller' | 'small' | 'normal';
    disabled?: boolean;
    fullWidth?: boolean;
}

const Button = ({
    children,
    disabled,
    fullWidth,
    size = 'normal',
    ...rest
}: Props) => {

    const classes = classNames([
        'c-button',
        `c-button--${size}`,
        { 'c-button--disabled': disabled },
        { 'c-button--fullwidth': fullWidth }
    ]);

    return (
        <button
            className={classes}
            {...rest}
        >
            {children}
        </button>
    );
};
export default Button;