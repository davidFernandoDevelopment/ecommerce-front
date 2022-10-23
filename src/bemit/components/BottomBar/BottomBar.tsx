import classnames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import React, { MouseEvent, useRef, useEffect } from 'react';

import './c-bottom-bar.scss';
import { BottomBarInterface } from './bottomBar.interface';



interface Props {
    p?: string;
    className?: string;
    data: BottomBarInterface[];
}


const BottomBar = React.forwardRef(
    (
        { p, data, className }: Props,
        ref: React.ForwardedRef<HTMLDivElement>
    ) => {
        let location = useLocation();
        let refList = useRef<HTMLUListElement>(null);
        let indicator = useRef<HTMLDivElement>(null);
        const classes = classnames([
            className,
            'c-bottom-bar',
            { [`${p}-bottom-bar`]: p }
        ]);

        useEffect(() => {
            let newIndex = data.find(d => d.path === location.pathname.split('/')[1])?.index!;
            calculate(newIndex);
            Array.from(refList.current!.children)[newIndex - 1]?.classList.add('is-active');
            // eslint-disable-next-line
        }, [location]);

        const handleClick = (index: number) => (e: MouseEvent<HTMLLIElement>) => {
            calculate(index);
            e.currentTarget.classList.add('is-active');
        };

        const calculate = (index: number = 1) => {
            let x = refList.current?.clientWidth! / data.length;
            if (refList.current) {
                Array.from(refList.current.children).forEach(item => {
                    item.classList.remove('is-active');
                });
            }
            indicator.current!.style.left = `${(x / 2) + (x * (index - 1))}px`;
        };


        return (
            <div
                ref={ref}
                className={`${classes}`}
            >
                <ul ref={refList} className='o-container c-bottom-bar__list'>
                    {
                        data.map(({ icon, text, path, index }) => (
                            <li
                                key={index}
                                className='c-bottom-bar__item'
                                onClick={handleClick(index)}
                            >
                                <Link to={path} className='c-bottom-bar__link'>
                                    <span className='c-bottom-bar__icon'>{icon}</span>
                                    <span className='c-bottom-bar__text'>{text}</span>
                                </Link>
                            </li>
                        ))
                    }
                    <div ref={indicator} className='c-bottom-bar__indicator'></div>
                </ul>
            </div>
        );
    });
export default BottomBar;