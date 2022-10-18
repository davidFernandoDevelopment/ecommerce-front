import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import './c-button.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'smaller' | 'small' | 'normal';
    disabled?: boolean;
}

const Button = ({
    children,
    size = 'normal',
    disabled,
    ...rest
}: Props) => {

    const classes = classNames([
        'c-button',
        `c-button--${size}`,
        { 'c-button--disabled': disabled }
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