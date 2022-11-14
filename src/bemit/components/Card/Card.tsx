import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import './c-card.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
    p?: string;
    className?: string;
    children: React.ReactNode;
}

const Card = ({ p, children, className, ...rest }: Props) => {
    const classes = classNames([
        'c-card',
        className,
        { [`${p}-card`]: p }
    ]);

    return (
        <div className={classes} {...rest}>{children}</div>
    );
};
export default Card;