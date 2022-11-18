import classnames from 'classnames';
import { FC, useEffect, useRef, ImgHTMLAttributes } from 'react';

import './c-image.scss';
import { Spinner1 } from '../../../ui';
import { TAspectRatio } from '../../data';
import { AspectRatio } from '../../objects';
import { useImageStatus } from '../../../hooks';



interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    noImg?: string;
    className?: string;
    loadingImg?: string;
    aspectRatio?: TAspectRatio;
}

// const loadingImageDefault = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0';
const noImageDefault = 'https://e7.pngegg.com/pngimages/709/358/png-clipart-price-toyservice-soil-business-no-till-farming-no-rectangle-pie.png';

const Image: FC<Props> = ({
    src = '',
    className,
    aspectRatio = '16-9',
    noImg = noImageDefault,
    loadingImg
}) => {

    let children: React.ReactNode = null;
    let ref = useRef<HTMLDivElement>(null);
    const [status, image] = useImageStatus(src);
    const isImageOk = !!src && status === 'loaded';

    const classes = classnames([
        'c-image',
        className
    ]);

    useEffect(() => {
        if (status === 'loaded') {
            image.classList.add('o-aspect-ratio__img');
            ref.current?.appendChild(image);
        }
    }, [status, image, src]);

    if (status === 'loading') {
        children = loadingImg
            ? <img src={loadingImg} alt="Not img" />
            : <div className='c-image__spinner'><Spinner1 /></div>;
    } else {
        children = <img
            src={noImg}
            alt="Not img"
        />;
    }

    return (
        <AspectRatio
            ref={ref}
            ratio={aspectRatio}
            className={classes}
        >
            {isImageOk ? null : children}
        </AspectRatio>
    );
};
export default Image;