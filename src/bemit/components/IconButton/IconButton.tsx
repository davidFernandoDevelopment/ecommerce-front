import classnames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import './c-icon-button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

const IconButton = React.forwardRef((
    { children, className, ...rest }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>
) => {

    const classes = classnames([
        'c-icon-button',
        className
    ]);

    return (
        <button ref={ref} className={classes} {...rest}>
            {children}
        </button>
    );
});
export default IconButton;