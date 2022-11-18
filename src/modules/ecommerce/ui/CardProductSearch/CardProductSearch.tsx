import { FC } from 'react';

import './card-product-search.scss';
import { Button, Card, CardContent, CardImage, Image } from '../../../../bemit/components';
import { useAppDispatch } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { Product, setCurrentProduct } from '../../../product';


interface Props {
    product: Product;
    onSubmit: (query: string) => void;
}

const CardProductSearch: FC<Props> = ({ product, onSubmit }: Props) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Card className='card-product-search'>
            <CardImage>
                <Image aspectRatio='9-16' src={product.image} />
            </CardImage>
            <CardContent>
                <h3 className='card-product-search__title'>{product.title}</h3>
                <p className='card-product-search__price'>S/ {product.price}</p>
                <Button
                    size='smaller'
                    className='card-product-search__button'
                    onClick={() => {
                        dispatch(setCurrentProduct(product));
                        navigate(`/products/${product.id}`);

                        onSubmit('');
                    }}
                >
                    Ver detalle
                </Button>
            </CardContent>
        </Card>
    );
};
export default CardProductSearch;