import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './card-product.scss';
import { useCart, useFav } from '../../../../hooks';
import { Product, setCurrentProduct } from '../../../product';
import { useAppDispatch } from '../../../../store/useStore';
import { Card, CardImage, CardContent, IconAction, Ribbon, Discount, Image } from '../../../../bemit/components';


interface Props {
    product: Product;
    newProduct?: boolean;
    offerProduct?: string;
}

const CardProduct = ({ product, newProduct, offerProduct }: Props) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { product: productFav, handleActionFav } = useFav(product.id.toString(), product);
    const { product: productCart, handleActionCart } = useCart(product.id.toString(), product);


    return (
        <Card p='card-product'>
            <CardImage>
                <Image
                    src={product.image}
                    alt={`Card Product ${product.id}`}
                />
            </CardImage>
            <CardContent>
                <h5 className='card-product__category'>{product.category}</h5>
                <h3
                    className='card-product__title'
                    onClick={() => {
                        dispatch(setCurrentProduct(product));
                        navigate(`/products/${product.id}`);
                    }}
                >
                    {product.title}
                </h3>
                <p className='card-product__price'>S/ {product.price}</p>
            </CardContent>
            <IconAction
                p='card-product'
                onAction={handleActionCart}
                iconDefault={<BiPlus />}
                iconAction={<FiTrash2 />}
                activeAction={!!productCart}
                className='card-product__icon-action--add'
            />
            <IconAction
                p='card-product'
                onAction={handleActionFav}
                iconAction={<AiFillHeart />}
                iconDefault={<AiOutlineHeart />}
                activeAction={!!productFav}
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