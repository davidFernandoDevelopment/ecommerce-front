import classnames from 'classnames';
import queryString from 'query-string';
import { MdSearch } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';
import { ChangeEvent, FC, FormEvent, useRef, useState, useLayoutEffect } from 'react';

import './c-search.scss';


interface Props {
    title?: string;
    keepOpen?: boolean;
    className?: string;
    onOpen?: (open: boolean) => void;
    onValue: (value: string) => void;
}


const Search: FC<Props> = ({
    title,
    onOpen,
    onValue,
    className,
    keepOpen = false,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        let { q = '' } = queryString.parse(location.search) as { q: string; };
        if (q) setValue(q);
    }, [location]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onValue(e.target.value);
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
        onValue('');
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