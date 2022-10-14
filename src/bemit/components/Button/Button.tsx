import { ButtonHTMLAttributes } from 'react';

import './c-button.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'smaller' | 'small' | 'normal';
}

const Button = ({
    children,
    size = 'normal',
    ...rest
}: Props) => {
    return (
        <button
            className={`c-button c-button--${size}`}
            {...rest}
        >
            {children}
        </button>
    );
};
export default Button;