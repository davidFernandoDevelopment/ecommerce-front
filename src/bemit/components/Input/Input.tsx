import { InputHTMLAttributes } from 'react';

import './c-input.scss';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className='c-input'
            {...props}
        />
    );
};
export default Input;