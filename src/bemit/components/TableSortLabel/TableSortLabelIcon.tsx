import { FC } from 'react';

import './c-table-sort-label.scss';


interface Props {
    direction?: 'asc' | 'desc';
}

const TableSortLabelIcon: FC<Props> = ({
    direction
}) => {
    return (
        <span className={`
            c-table-sort-label__icon
            ${direction === 'asc'
                ? 'c-table-sort-label__icon--asc'
                : 'c-table-sort-label__icon--desc'
            }
        `}>
            TableSortLabelIcon
        </span>
    );
};
export default TableSortLabelIcon;