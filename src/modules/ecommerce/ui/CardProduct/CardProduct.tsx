import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './card-product.scss';
import { Product } from '../../../product';
import { Card, CardImage, CardContent, IconAction, Ribbon, Discount } from '../../../../bemit/components';


interface Props {
    product: Product;
    newProduct?: boolean;
    offerProduct?: string;
}

const CardProduct = ({ product, newProduct, offerProduct }: Props) => {

    return (
        <Card p='card-product'>
            <CardImage src={product.image} alt={`Card Product ${product.id}`} />
            <CardContent>
                <h5 className='card-product__category'>{product.category}</h5>
                <h3 className='card-product__title'>{product.title}</h3>
                <p className='card-product__price'>S/ {product.price}</p>
            </CardContent>
            <IconAction
                p='card-product'
                iconDefault={<BiPlus />}
                iconAction={<FiTrash2 />}
                className='card-product__icon-action--add'
            />
            <IconAction
                p='card-product'
                iconAction={<AiFillHeart />}
                iconDefault={<AiOutlineHeart />}
                className='card-product__icon-action--heart'
            />

            <Discount show={!!offerProduct}>
                {offerProduct}
            </Discount>

            <Ribbon show={!!newProduct}>
                Nuevo
            </Ribbon>
        </Card>
    );
};
export default CardProduct;