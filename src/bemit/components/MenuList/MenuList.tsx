import classNames from 'classnames';
import './c-menu-list.scss';


interface Props {
    className?: string;
    children: React.ReactNode;
}

const List = ({ children, className }: Props) => {

    const classes = classNames([
        className,
        'c-menu-list'
    ]);

    return (
        <ul className={classes}>
            {children}
        </ul>
    );
};
export default List;