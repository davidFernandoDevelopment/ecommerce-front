import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardImage, Image } from '../../../../bemit/components';

import './card-category.scss';


interface Props {
    category: string;
}


const CardCategory: FC<Props> = ({ category }) => {

    const navigate = useNavigate();

    return (
        <Card p='card-category' onClick={() => navigate(`/products?q=${category.toLowerCase()}`)}>
            <CardImage>
                <Image
                    aspectRatio='16-9'
                    src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
                    loadingImg='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
                />
            </CardImage>
            <CardContent>
                <p className='card-category__title'>
                    {category}
                </p>
            </CardContent>
        </Card >
    );
};
export default CardCategory;