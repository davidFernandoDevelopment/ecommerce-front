import { useState } from 'react';
import classNames from 'classnames';

import './c-icon-action.scss';
import { IconButton } from '..';


interface Props {
    p?: string;
    className?: string;
    iconAction: React.ReactNode;
    iconDefault: React.ReactNode;
}


const IconAction = ({
    p: parent,
    className,
    iconAction,
    iconDefault
}: Props) => {
    const [active, setActive] = useState(false);
    const classes = classNames([{ [`${parent}__icon-action`]: parent }]);

    return (
        <IconButton
            onClick={() => setActive(prev => !prev)}
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
};
export default IconAction;