import { FC } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
    children: React.ReactNode;
    sortDirection: 'asc' | 'desc';
}


const TableCell: FC<Props> = ({
    children,
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