import { FiTrash2 } from 'react-icons/fi';

import './cart-product.scss';
import { Card, CardContent, CardImage, IconButton } from '../../../../bemit/components';
import { Counter } from '../../../../ui';


const CartProduct = () => {
    return (
        <Card p='cart-product' className='cart-product'>
            <CardImage
                aspectRatio='9-16'
                src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
            />
            <CardContent>
                <h3 className='cart-product__title'>Mens Cotton jacket</h3>
                <p className='cart-product__price'>S/ 55.99</p>
                <div className='cart-product__summary'>
                    <Counter p='cart-product' />
                    <p className='cart-product__subtotal'>S/ 200.00</p>
                </div>
            </CardContent>
            <IconButton className='cart-product__trash'>
                <FiTrash2 />
            </IconButton>
        </Card>
    );
};
export default CartProduct;