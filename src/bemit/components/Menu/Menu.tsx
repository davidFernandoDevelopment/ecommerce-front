import React from 'react';

import './c-menu.scss';



interface Props {
    children: React.ReactNode;
}

const Menu = React.forwardRef(
    ({ children }: Props,
        ref: React.ForwardedRef<HTMLElement>
    ) => {

        return (
            <nav className='c-menu' ref={ref}>
                {children}
            </nav>
        );
    });

export default Menu;