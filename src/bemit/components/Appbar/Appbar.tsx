import React from 'react';
import classNames from 'classnames';

import './c-appbar.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
    position?: 'relative' | 'fixed';
}

const Appbar = React.forwardRef(
    ({ position = 'fixed', children, className }: Props,
        ref: React.ForwardedRef<HTMLHeadElement>
    ) => {

        const classes = classNames([
            'c-appbar',
            className,
            `c-appbar--${position}`
        ]);

        return (
            <header ref={ref} className={classes}>
                {children}
            </header>
        );
    }
);
export default Appbar;