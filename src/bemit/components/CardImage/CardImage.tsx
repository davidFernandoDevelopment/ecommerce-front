import classnames from 'classnames';
import { ImgHTMLAttributes } from 'react';

import './c-card-image.scss';
import { TAspectRatio } from '../../data';
import { AspectRatio } from '../../objects';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    aspectRatio?: TAspectRatio;
}

const CardImage = ({ aspectRatio, className, ...rest }: Props) => {

    const classes = classnames([
        'c-card-image', className
    ]);

    return (
        <AspectRatio
            ratio={aspectRatio}
            className={classes}
        >
            <img className='c-card-image__img' alt={rest.alt} {...rest} />
        </AspectRatio>
    );
};
export default CardImage;