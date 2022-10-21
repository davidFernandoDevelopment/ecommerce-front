import { FC, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import './cart-product.scss';
import { Counter, StateCounter } from '../../../../ui';
import { useAppDispatch } from '../../../../store/useStore';
import { changeProductInCart, deleteProductInCart } from '../../../cart/store';
import { Card, CardContent, CardImage, IconButton } from '../../../../bemit/components';


interface Props {
    productId: number;
    price: number;
    title: string;
    image: string;
    quantity: number;
    subtotal: number;
}

const CartProduct: FC<Props> = ({
    title,
    price,
    image,
    subtotal,
    productId,
    quantity = 0
}) => {
    const [q, setQ] = useState(quantity);
    const dispatch = useAppDispatch();


    const handleCount = (type: StateCounter) => {
        let cant = type === 'minus'
            ? Math.max(q - 1, 1) : q + 1;
        setQ(cant);

        dispatch(changeProductInCart({
            title,
            price,
            image,
            subtotal,
            productId,
            quantity: cant
        }));
    };

    const handleTrash = () => {
        dispatch(deleteProductInCart(productId));
    };


    return (
        <Card p='cart-product' className='cart-product'>
            <CardImage
                aspectRatio='9-16'
                src={image}
            />
            <CardContent>
                <h3 className='cart-product__title'>{title}</h3>
                <p className='cart-product__price'>S/ {price}</p>
                <div className='cart-product__summary'>
                    <Counter
                        count={q}
                        minValue={1}
                        p='cart-product'
                        onCountChange={handleCount}
                    />
                    <p className='cart-product__subtotal'>S/ {subtotal}</p>
                </div>
            </CardContent>
            <IconButton
                onClick={handleTrash}
                className='cart-product__trash'
            >
                <FiTrash2 />
            </IconButton>
        </Card>
    );
};
export default CartProduct;