import { FC, useRef, useEffect, Children } from 'react';

import './c-tabs.scss';
import { CustomProvider } from '../../helpers';



interface Props {
    className?: string;
    children: React.ReactNode;
}


const Tabs: FC<Props> = ({ children, className }) => {
    const indicator = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let n = Children.toArray(children).length;
        let newWidth = 100 / n;

        if (indicator.current) {
            indicator.current.style.width = `${newWidth}%`;
        }
        //eslint-disable-next-line
    }, []);

    return (
        <CustomProvider initialValue={0} other={{ indicator }}>
            <div className={`c-tabs ${className}`}>
                {children}
                <span ref={indicator} className='c-tabs__indicator'></span>
            </div>
        </CustomProvider>
    );
};
export default Tabs;