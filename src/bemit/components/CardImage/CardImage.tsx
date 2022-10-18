import { ImgHTMLAttributes } from 'react';

import './c-card-image.scss';

const CardImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <div className='c-card-image'>
            <img className='c-card-image__img' alt={props.alt} {...props} />
        </div>
    );
};
export default CardImage;