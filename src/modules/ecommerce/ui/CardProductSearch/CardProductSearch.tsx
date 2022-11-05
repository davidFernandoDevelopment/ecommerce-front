import { FC } from 'react';

import './card-product-search.scss';
import { Button, Card, CardContent, CardImage } from '../../../../bemit/components';


interface Props {
    price: number;
    title: string;
    image: string;
}

const CardProductSearch: FC<Props> = ({ title, price, image }: Props) => {
    return (
        <Card className='card-product-search'>
            <CardImage aspectRatio='16-9' src={image} />
            <CardContent>
                <h3 className='card-product-search__title'>{title}</h3>
                <p className='card-product-search__price'>S/ {price}</p>
                <Button
                    size='smaller'
                    className='card-product-search__button'
                >
                    Ver detalle
                </Button>
            </CardContent>
        </Card>
    );
};
export default CardProductSearch;