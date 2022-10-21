import classnames from 'classnames';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { IconButton } from '../../bemit/components';

import './counter.scss';
import { StateCounter } from './counter.types';



interface Props {
    p?: string;
    count?: number;
    minValue?: number;
    maxValue?: number;
    className?: string;
    action?: StateCounter;
    onCountChange?: (state: StateCounter) => void;
}

const Counter = ({
    p,
    minValue,
    maxValue,
    className,
    count = 0,
    onCountChange
}: Props) => {

    const classes = classnames([
        'counter',
        className,
        { [`${p}-counter`]: p }
    ]);

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
            <span className="counter__number">{count}</span>
            <IconButton
                onClick={() => handleClick('plus')}
                className={`counter__button ${count === maxValue ? 'counter__button--disabled' : ''}`}
            >
                <AiOutlinePlus />
            </IconButton>
        </div>
    );
};
export default Counter;