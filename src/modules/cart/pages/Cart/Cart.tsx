import './cart.scss';
import { CartProduct } from '../../ui';
import { HeaderAction } from '../../../ecommerce';
import { Button } from '../../../../bemit/components';
import { Container } from '../../../../bemit/objects';

const Cart = () => {
    return (
        <div className='cart'>
            <HeaderAction className='cart__header' />
            <Container className='cart__container'>
                <div className="cart__products">
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>
                <div className="cart__total">
                    <div className="cart__abstract">
                        <p className="cart__quantity">3 Articulos</p>
                        <p className="cart__price">S/ 500.00</p>
                    </div>
                    <Button fullWidth>
                        Pagar
                    </Button>
                </div>
            </Container>
        </div>
    );
};
export default Cart;