import { FC, RefObject, Dispatch, SetStateAction, useEffect } from 'react';

import './c-tab.scss';
import { useCustomContext } from '../../helpers';

interface TabsContext {
    val: number;
    indicator: RefObject<HTMLSpanElement>;
    setVal: Dispatch<SetStateAction<number>>;
}

interface Props {
    id: number;
    label: string;
    children?: React.ReactNode;
}

const Tab: FC<Props> = ({ id, label, children }) => {

    const { val, setVal, indicator } = useCustomContext<TabsContext>();

    useEffect(() => {
        indicator.current!.style.transform = `translateX(${100 * val}%)`;
        //eslint-disable-next-line
    }, [val]);

    return (
        <div
            className={`c-tab ${id === val ? 'is-active' : ''}`}
            onClick={() => setVal(id)}
        >
            <p className='c-tab__label'>{label}</p>
            <div className="c-tab__content">
                {children}
            </div>
        </div>
    );
};
export default Tab;