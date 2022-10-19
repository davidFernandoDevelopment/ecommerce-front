import { FC } from 'react';
import classNames from 'classnames';

import './c-appbar.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
    position?: 'relative' | 'fixed';
}

const Appbar: FC<Props> = ({ position = 'fixed', children, className }) => {

    const classes = classNames([
        'c-appbar',
        className,
        `c-appbar--${position}`
    ]);

    return (
        <header className={classes}>
            {children}
        </header>
    );
};
export default Appbar;