import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import './c-icon-button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

const IconButton = ({ children, className, ...rest }: Props) => {

    const classes = classnames([
        'c-icon-button',
        className
    ]);

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
};
export default IconButton;