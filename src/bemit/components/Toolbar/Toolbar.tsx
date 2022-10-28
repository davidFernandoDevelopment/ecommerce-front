import React from 'react';
import classNames from 'classnames';

import './c-toolbar.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Toolbar = React.forwardRef(
    ({ children, className }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {

        const classes = classNames([
            className,
            'c-toolbar',
            'o-container',
        ]);

        return (
            <div ref={ref} className={classes}>
                {children}
            </div>
        );
    });
export default Toolbar;