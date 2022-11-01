import { InputHTMLAttributes, useRef, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import './c-text-field.scss';


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: boolean;
    helperText?: string;
    endIcon?: React.ReactNode;
    password?: boolean;
}


const TextField = ({
    label,
    error,
    endIcon,
    password,
    helperText,
    ...rest
}: Props) => {

    const [showPassword, setShowPassword] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className={`c-text-field ${error ? 'has-error' : ''} ${ref.current?.value.length ? 'is-open' : ''}`}>
            <input
                ref={ref}
                type={password ? (showPassword ? "search" : "password") : "search"}
                className="c-text-field__input"
                {...rest}
            />
            <span className="c-text-field__label">{label}</span>
            <span className='c-text-field__error'>{helperText}</span>
            {
                password &&
                <span
                    onClick={() => setShowPassword(prev => !prev)}
                    className='c-text-field__password'
                >
                    {
                        showPassword
                            ? <MdVisibilityOff />
                            : <MdVisibility />
                    }
                </span>
            }
        </div>
    );
};
export default TextField;