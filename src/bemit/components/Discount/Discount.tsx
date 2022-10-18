import classNames from 'classnames';
import './c-discount.scss';


interface Props {
    show: boolean;
    className?: string;
    children: React.ReactNode;
}


const Discount = ({ show, children, className }: Props) => {

    const classes = classNames([
        'c-discount',
        className
    ]);

    return (
        show
            ? (
                <span className={classes}>
                    {children}
                </span>
            ) : null
    );
};
export default Discount;