import classnames from 'classnames';

import './c-card-image.scss';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

const CardImage = ({
    children,
    className
}: Props) => {

    const classes = classnames([
        'c-card-image', className
    ]);

    return (
        <div className={classes}>{children}</div>
    );
};
export default CardImage;