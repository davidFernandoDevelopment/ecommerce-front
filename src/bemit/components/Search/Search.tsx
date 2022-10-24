import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import './c-search.scss';


interface Props {
    title?: string;
    onValue: (value: string) => void;
}


const Search: FC<Props> = ({ onValue, title }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        onValue(value.trim());
        setValue('');
    };

    const clear = () => {
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`c-search ${value.trim() ? 'is-active' : ''}`}
        >
            <span className="c-search__icon">
                <AiOutlineSearch />
            </span>
            <div className="c-search__wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="c-search__input"
                    placeholder={title || "Que buscaremos ..."}
                />
            </div>
            <span
                onClick={clear}
                className="c-search__close"
            >
                <AiOutlineClose />
            </span>
        </form>
    );
};
export default Search;