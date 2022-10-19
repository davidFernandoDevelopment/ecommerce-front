import classnames from 'classnames';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import './counter.scss';
import { IconButton } from '../../bemit/components';


interface Props {
    p?: string;
    className?: string;
}

const Counter = ({ p, className }: Props) => {

    const classes = classnames([
        'counter',
        className,
        { [`${p}-counter`]: p }
    ]);

    return (
        <div className={classes}>
            <IconButton className="counter__button">
                <AiOutlineMinus />
            </IconButton>
            <span className="counter__number">3</span>
            <IconButton className="counter__button">
                <AiOutlinePlus />
            </IconButton>
        </div>
    );
};
export default Counter;