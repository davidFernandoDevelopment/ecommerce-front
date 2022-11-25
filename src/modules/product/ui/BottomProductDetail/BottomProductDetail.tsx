import { FC } from 'react';
import classnames from 'classnames';

import './bottom-product-detail.scss';
import { Appbar, Toolbar } from '../../../../bemit/components';


interface Props {
    show?: boolean;
    className?: string;
    children: React.ReactNode;
}

const BottomProductDetail: FC<Props> = ({
    show,
    children,
    className
}) => {

    const classes = classnames([
        className,
        { 'is-active': show },
        'bottom-product-detail__appbar'
    ]);

    return (
        <Appbar className={classes}>
            <Toolbar>
                {children}
            </Toolbar>
        </Appbar>
    );
};
export default BottomProductDetail;