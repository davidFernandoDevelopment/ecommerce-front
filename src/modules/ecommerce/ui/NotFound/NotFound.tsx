import { FC } from 'react';
import { AspectRatio } from '../../../../bemit/objects';

import './not-found.scss';


interface Props {
    img: string;
    text: string;
}

const NotFound: FC<Props> = ({ img, text }) => {
    return (
        <div className='not-found'>
            <AspectRatio ratio='16-9'>
                <img className='not-found__img' src={img} alt="Not found" />
            </AspectRatio>
            <h3 className='not-found__text'>{text}</h3>
        </div>
    );
};
export default NotFound;