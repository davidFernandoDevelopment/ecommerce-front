import { FC } from 'react';
import { Card, CardContent, CardImage } from '../../../../bemit/components';
import './card-category.scss';


interface Props {
    category: string;
}


const CardCategory: FC<Props> = ({ category }) => {
    return (
        <Card p='card-category'>
            <CardImage aspectRatio='9-16' src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' />
            <CardContent>
                <p className='card-category__title'>
                    {category}
                </p>
            </CardContent>
        </Card>
    );
};
export default CardCategory;