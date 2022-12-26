import { FC } from 'react';

import './c-table-sort-label.scss';


interface Props {
    active?: boolean;
    hideSortIcon?: boolean;
    direction?: 'asc' | 'desc';
    children?: React.ReactNode;
    iconComponent?: React.ReactNode;
}


const TableSortLabel: FC<Props> = ({
    active,
    children,
    direction,
    hideSortIcon,
    iconComponent
}) => {
    return (
        <button className='c-table-sort-label'>
            
        </button>
    );
};
export default TableSortLabel;