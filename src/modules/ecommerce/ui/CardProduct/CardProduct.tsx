import { useMemo } from 'react';
import { toast } from 'react-toastify';
import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './card-product.scss';
import { Product, setCurrentProduct } from '../../../product';
import { useAppDispatch, useAppSelector } from '../../../../store/useStore';
import { changeProductInCart, deleteProductInCart } from '../../../cart/store';
import { Card, CardImage, CardContent, IconAction, Ribbon, Discount, StateIconAction, Image } from '../../../../bemit/components';


interface Props {
    product: Product;
    newProduct?: boolean;
    offerProduct?: string;
}

const CardProduct = ({ product, newProduct, offerProduct }: Props) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.cart);

    const changeActiveAction = useMemo(() => {
        return !!products.find(p => p.productId === product.id);
        //eslint-disable-next-line
    }, [products]);
    const handleAction = (state: StateIconAction) => {
        if (state === 'active') {
            //* TODO: ADD PRODUCT IN SHOPPING-CART.
            console.log('PRODUCT ADDED !!!');
            toast.success('Producto agregado al carrito');
            dispatch(changeProductInCart({
                quantity: 1,
                image: product.image,
                price: product.price,
                title: product.title,
                productId: product.id,
                subtotal: product.price,
            }));
        } else if (state === 'default') {
            //* TODO: REMOVE PRODUCT FROM SHOPPING-CART.
            console.log('REMOVE PRODUCT IN CART');
            dispatch(deleteProductInCart(product.id));
        }
    };

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
                onAction={handleAction}
                iconDefault={<BiPlus />}
                iconAction={<FiTrash2 />}
                activeAction={changeActiveAction}
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