import classNames from 'classnames';

import './c-ribbon.scss';

interface Props {
    show: boolean;
    className?: string;
    children: React.ReactNode;
}

const Ribbon = ({ show, children, className }: Props) => {
    const classes = classNames([
        'c-ribbon',
        className
    ]);

    return (
        show
            ? (
                <div className={classes}>
                    <span className='c-ribbon__text'>{children}</span>
                </div>
            ) : null
    );
};
export default Ribbon;