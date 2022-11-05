import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import './c-button.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    size?: 'smaller' | 'small' | 'normal';
}

const Button = ({
    children,
    disabled,
    fullWidth,
    className,
    size = 'normal',
    ...rest
}: Props) => {

    const classes = classNames([
        'c-button',
        className,
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