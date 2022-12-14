import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

import './c-icon-action.scss';
import { IconButton, StateIconAction } from '..';


interface Props {
    p?: string;
    activeAction?: boolean;
    className?: string;
    iconAction: React.ReactNode;
    iconDefault: React.ReactNode;
    onAction?: (state: StateIconAction) => any;
}


const IconAction = React.forwardRef((
    {
        onAction,
        p: parent,
        className,
        iconAction,
        iconDefault,
        activeAction = false,
    }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>
) => {
    const [active, setActive] = useState(activeAction);
    const classes = classNames([{ [`${parent}__icon-action`]: parent }]);


    useEffect(() => {
        setActive(activeAction);
    }, [activeAction]);

    const handleClick = () => {
        setActive(prev => !prev);
        onAction && onAction(active ? 'default' : 'active');
    };

    return (
        <IconButton
            ref={ref}
            onClick={handleClick}
            className={`${className} c-icon-action ${classes}`}
        >
            {
                !active
                    ? (
                        <span className={`c-icon-action__icon ${classes ? `${classes}__icon` : ''}`}>
                            {iconDefault}
                        </span>
                    )
                    : (
                        <span className={`c-icon-action__icon ${classes ? `${classes}__icon` : ''}`}>
                            {iconAction}
                        </span>
                    )
            }
        </IconButton>
    );
});
export default IconAction;