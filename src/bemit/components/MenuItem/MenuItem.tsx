import classNames from 'classnames';
import './c-menu-item.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MenuItem = ({ children, className }: Props) => {

    const classes = classNames([
        className,
        'c-menu-item'
    ]);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
export default MenuItem;