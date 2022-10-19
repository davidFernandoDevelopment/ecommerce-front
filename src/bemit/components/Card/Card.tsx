import classNames from 'classnames';

import './c-card.scss';

interface Props {
    p?: string;
    className?: string;
    children: React.ReactNode;
}

const Card = ({ p, children, className }: Props) => {
    const classes = classNames([
        'c-card',
        className,
        { [`${p}-card`]: p }
    ]);

    return (
        <div className={classes}>{children}</div>
    );
};
export default Card;