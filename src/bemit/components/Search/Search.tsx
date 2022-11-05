import classnames from 'classnames';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';
import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';

import './c-search.scss';
import { useDebounce, useQuery } from '../../../hooks';


interface Props {
    title?: string;
    debounce?: number;
    keepOpen?: boolean;
    className?: string;
    depOnValue?: any[];
    onOpen?: (open: boolean) => void;
    onValue: (value: string) => void;
}


const Search: FC<Props> = ({
    title,
    onOpen,
    onValue,
    className,
    debounce = 0,
    depOnValue = [],
    keepOpen = false
}) => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const emit = useDebounce(debounce, onValue, depOnValue);

    useQuery(setValue);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        emit(e.target.value);
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            navigate('', { replace: true });
            return;
        }
        setValue('');
        onValue(value.trim());
        navigate(`?q=${value.toLowerCase()}`, { replace: true });
    };

    const toggleExpand = () => {
        if (keepOpen) return;
        setOpen(prev => {
            if (!prev) inputRef.current?.focus();
            if (onOpen) onOpen(!prev);
            return !prev;
        });
    };

    const clear = () => {
        emit('');
        setValue('');
        inputRef.current?.focus();
    };

    const classes = classnames([
        className,
        'c-search',
        { 'is-active': open || keepOpen },
    ]);

    return (
        <form
            onSubmit={handleSubmit}
            className={classes}
        >
            <span
                onClick={toggleExpand}
                className="c-search__icon c-search__icon--search"
            >
                {
                    open && !keepOpen
                        ? <AiOutlineArrowLeft />
                        : <MdSearch />
                }
            </span>
            <div className="c-search__wrapper">
                <input
                    ref={inputRef}
                    type="search"
                    value={value}
                    onChange={handleChange}
                    className="c-search__input"
                    placeholder={title || "Que buscaremos ..."}
                />
            </div>
            <span
                onClick={clear}
                className={`c-search__icon c-search__icon--close ${value && 'is-show'}`}
            >
                <AiOutlineClose />
            </span>
        </form>
    );
};
export default Search;