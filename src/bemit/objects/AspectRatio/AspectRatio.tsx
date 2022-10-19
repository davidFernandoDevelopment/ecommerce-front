import classnames from 'classnames';
import React, { ImgHTMLAttributes } from 'react';

import './o-aspect-ratio.scss';
import { TAspectRatio } from '../../data';


interface Props {
    p?: string;
    className?: string;
    ratio?: TAspectRatio;
    children: TChildren;
}
type TChildren = React.ReactElement<ImgHTMLAttributes<HTMLImageElement>>;


const AspectRatio = ({ p: parent, className, children, ratio = '16-9' }: Props) => {
    const p = classnames([{ [`${parent}-aspect-ratio`]: parent }]);
    const classes = classnames([
        p,
        className,
        'o-aspect-ratio',
        `o-aspect-ratio--${ratio}`,
    ]);

    return (
        <div className={classes}>
            {
                React.cloneElement(children, {
                    className: `${(children).props.className} o-aspect-ratio__img ${p ? `${p}__img` : ''}`
                })
            }
        </div>
    );
};
export default AspectRatio;