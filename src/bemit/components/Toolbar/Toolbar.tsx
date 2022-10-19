import classNames from 'classnames';
import './c-toolbar.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Toolbar = ({ children, className }: Props) => {

    const classes = classNames([
        className,
        'c-toolbar',
        'o-container',
    ]);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
export default Toolbar;