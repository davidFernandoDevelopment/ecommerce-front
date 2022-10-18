import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { MouseEvent, useRef, useEffect } from 'react';

import './c-bottom-bar.scss';
import { BottomBarInterface } from './bottomBar.interface';



interface Props {
    p?: string;
    data: BottomBarInterface[];
}


const BottomBar = ({ p, data }: Props) => {

    let ref = useRef<HTMLUListElement>(null);
    let indicator = useRef<HTMLDivElement>(null);
    const classes = classnames([{ [`${p}-bottom-bar`]: p }]);

    useEffect(() => {
        calculate();
        Array.from(ref.current!.children)[0].classList.add('is-active');
        //eslint-disable-next-line
    }, []);

    const handleClick = (index: number) => (e: MouseEvent<HTMLLIElement>) => {
        if (ref.current) {
            Array.from(ref.current.children).forEach(item => {
                item.classList.remove('is-active');
            });
        }
        e.currentTarget.classList.add('is-active');
        calculate(index);
    };

    const calculate = (index: number = 1) => {
        let x = ref.current?.clientWidth! / data.length;
        indicator.current!.style.left = `${(x / 2) + (x * (index - 1))}px`;
    };


    return (
        <div className={`c-bottom-bar ${classes}`}>
            <ul ref={ref} className={`o-container c-bottom-bar__list ${classes ? `${classes}__list` : ''}`}>
                {
                    data.map(({ icon, text, path }, index) => (
                        <li
                            key={index}
                            className={`c-bottom-bar__item ${classes ? `${classes}__item` : ''}`}
                            onClick={handleClick(index + 1)}
                        >
                            <Link to={path} className={`c-bottom-bar__link ${classes ? `${classes}__link` : ''}`}>
                                <span className={`c-bottom-bar__icon ${classes ? `${classes}__icon` : ''}`}>{icon}</span>
                                <span className={`c-bottom-bar__text ${classes ? `${classes}__text` : ''}`}>{text}</span>
                            </Link>
                        </li>
                    ))
                }
                <div ref={indicator} className={`c-bottom-bar__indicator ${classes ? `${classes}__indicator` : ''}`}></div>
            </ul>
        </div>
    );
};
export default BottomBar;