import { FC } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import './c-table-cell.scss';



interface Props {
    children: React.ReactNode;
    sortDirection: 'asc' | 'desc';
    align: 'left' | 'center' | 'right';
}


const TableCell: FC<Props> = ({
    children,
    align = 'left',
    sortDirection = 'asc'
}) => {
    return (
        <div>
            <span
                className={`
                ${sortDirection === 'asc'
                        ? ''
                        : 'rotate'
                    }`}
            >
                <AiOutlineArrowUp />
            </span>
            {children}
        </div>
    );
};
export default TableCell;