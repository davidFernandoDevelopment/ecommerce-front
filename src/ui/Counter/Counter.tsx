import classnames from 'classnames';
import { ChangeEvent, useState, useEffect, FocusEvent } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


import './counter.scss';
import { StateCounter } from './counter.types';
import { IconButton } from '../../bemit/components';



interface Props {
    p?: string;
    count?: number | string;
    minValue?: number;
    maxValue?: number;
    className?: string;
    action?: StateCounter;
    onCountChange?: (state: StateCounter, value?: number) => void;
}

const Counter = ({
    p,
    minValue,
    maxValue,
    className,
    count = 0,
    onCountChange
}: Props) => {
    const [q, setQ] = useState(count);

    const classes = classnames([
        'counter',
        className,
        { [`${p}-counter`]: p }
    ]);

    useEffect(() => {
        if (count !== undefined) setQ(count);
    }, [count]);

    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        +value === 0 ? setQ('') : setQ(+value);
    };
    const handleFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) => {
        if (+value === 0) setQ('');
    };
    const handleBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) => {
        +value ? setQ(+value) : setQ(count);
        if (onCountChange)
            onCountChange('setValue', +value);
    };

    const handleClick = (type: StateCounter) => {
        onCountChange && onCountChange(type);
    };

    return (
        <div className={classes}>
            <IconButton
                onClick={() => handleClick('minus')}
                className={`counter__button ${count === minValue ? 'counter__button--disabled' : ''}`}
            >
                <AiOutlineMinus />
            </IconButton>
            <input
                type="number"
                value={q}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                className="counter__number"
            />
            <IconButton
                onClick={() => handleClick('plus')}
                className={`counter__button ${count === maxValue ? 'counter__button--disabled' : ''}`}
            >
                <AiOutlinePlus />
            </IconButton>
        </div>
    );
};
export default Counter;;