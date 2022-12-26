import { FC } from 'react';

interface Props {
    id: number;
    className: string;
    sortDir: boolean;
    sortable: boolean;
    onSort: Function | null;
}

const TableColumn: FC<Props> = ({
    id,
    onSort,
    className = '',
    sortDir = false,
    sortable = true,
}) => {

    const canSort = onSort && sortable;

    return (
        <div></div>
    );
};
export default TableColumn;