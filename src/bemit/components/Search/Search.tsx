import classnames from 'classnames';
import { useLayoutEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';
import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';

import './c-search.scss';
import { useDebounce } from '../../../hooks';


interface Props {
    title?: string;
    debounce?: number;
    keepOpen?: boolean;
    className?: string;
    depOnValue?: any[];
    initialValue?: string;
    onOpen?: (open: boolean) => void;
    onSubmit?: (value: string) => void;
    onDebounce?: () => void;
    onValue: (value: string, state?: 'loading' | 'finish') => void;
}


const Search: FC<Props> = ({
    title,
    onOpen,
    onValue,
    onSubmit,
    className,
    onDebounce,
    debounce = 0,
    depOnValue = [],
    keepOpen = false,
    initialValue,
}) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(initialValue || '');
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [emit] = useDebounce(debounce, onValue, depOnValue);


    useLayoutEffect(() => {
        if (initialValue) setValue(initialValue);
    }, [initialValue]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        emit(e.target.value);
        setValue(e.target.value);
        loadingDebounce();
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            navigate('', { replace: true });
            return;
        }
        if (!initialValue) {
            onValue('');
            setValue('');
        }
        setOpen(false);
        if (onSubmit) {
            onSubmit(value);
            return;
        };
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

    const loadingDebounce = () => onDebounce && debounce && onDebounce();

    const clear = () => {
        emit('');
        setValue('');
        inputRef.current?.focus();
        loadingDebounce();
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