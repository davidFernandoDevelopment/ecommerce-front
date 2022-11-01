import { useEffect, useRef } from 'react';

import './cart.scss';
import { CartProduct } from '../../ui';
import { HeaderAction } from '../../../ecommerce';
import { Button } from '../../../../bemit/components';
import { Container } from '../../../../bemit/objects';
import { uiStateService } from '../../../../services';
import { useAppSelector } from '../../../../store';


const Cart = () => {
    const cartRef = useRef<HTMLDivElement>(null);
    const { products, total } = useAppSelector(state => state.cart);

    useEffect(() => {
        uiStateService
            .getSubject()
            .subscribe(data => {
                if (data) {
                    cartRef.current?.classList.add('is-open');
                    document.body.style.overflow = 'hidden';
                    return;
                }
                document.body.style.overflow = 'auto';
                cartRef.current?.classList.remove('is-open');
            });
    }, []);


    const closeCart = () => {
        uiStateService.setSubject(false);
    };

    return (
        <div ref={cartRef} className='cart'>
            <HeaderAction
                fnAction={closeCart}
                className='cart__header'
                title='Carrito de compras'
            />
            <Container className='cart__container'>
                <div className="cart__products">
                    {
                        products.map((p) => (
                            <CartProduct key={p.productId} {...p} />
                        ))
                    }
                </div>
                <div className="cart__total">
                    <div className="cart__abstract">
                        <p className="cart__quantity">{products.length} Articulos</p>
                        <p className="cart__price">S/ {total}</p>
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