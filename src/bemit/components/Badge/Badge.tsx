import { FC, useEffect, useRef } from 'react';

import './c-badge.scss';


interface Props {
    className?: string;
    badgeContent?: number;
    children: React.ReactNode;
}

const Badge: FC<Props> = ({ children, className, badgeContent }) => {

    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        ref.current?.classList.add('c-badge__content--changes');

        setTimeout(() => {
            ref.current?.classList.remove('c-badge__content--changes');
        }, 200);
    }, [badgeContent]);

    return (
        <div className='c-badge'>
            {children}
            {
                badgeContent && badgeContent > 0
                    ? (
                        <span ref={ref} className='c-badge__content'>
                            {badgeContent}
                        </span>
                    ) : null
            }
        </div>
    );
};
export default Badge;