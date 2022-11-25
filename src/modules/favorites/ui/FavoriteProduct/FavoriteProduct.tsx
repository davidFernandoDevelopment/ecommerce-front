import { FC, useMemo, useState, useRef, useEffect } from 'react';
import { BsCartDash } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';

import './favorite-product.scss';
import { Card, CardContent, CardImage, IconAction, IconButton, Image, StateIconAction } from '../../../../bemit/components';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { removeFavorite } from '../../store/favoriteSlice';
import { Counter, StateCounter } from '../../../../ui';
import { changeProductInCart, deleteProductInCart } from '../../../cart/store';



interface Props {
    id: number | string;
    title: string;
    price: number;
    image: string;
}


const FavoriteProduct: FC<Props> = ({
    id,
    image,
    title,
    price,
}) => {
    const iconActionRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.cart);
    const changeActiveActionCart = useMemo(() => {
        return products.find(p => p.productId === id);
        //eslint-disable-next-line
    }, [products]);
    const [q, setQ] = useState(changeActiveActionCart?.quantity || 1);

    useEffect(() => {
        console.log('Change Active Action Cart !!!');
        if (!!changeActiveActionCart) {
            if (q !== changeActiveActionCart.quantity) {
                iconActionRef.current?.classList.remove('favorite-product__iconAction--remove');
            } else {
                iconActionRef.current?.classList.add('favorite-product__iconAction--remove');
            }
        } else {
            iconActionRef.current?.classList.remove('favorite-product__iconAction--remove');
        }
    }, [changeActiveActionCart, q]);

    const removeProduct = () => {
        dispatch(removeFavorite(id.toString()));
    };

    const handleCount = (type: StateCounter) => {
        let cant = type === 'minus'
            ? Math.max(q - 1, 1) : q + 1;
        setQ(cant);
    };

    const handleAction = (type: StateIconAction) => {
        if (type === 'active') {
            console.log('BORRAR DEL CARRITO');
            iconActionRef.current?.classList.remove('favorite-product__iconAction--remove');
            dispatch(deleteProductInCart(id));
        } else {
            console.log('AGREGAR AL CARRITO');
            iconActionRef.current?.classList.add('favorite-product__iconAction--remove');
            // toast.success('Producto agregado al carrito');
            dispatch(changeProductInCart({
                quantity: q,
                image: image,
                price: price,
                title: title,
                productId: id,
                subtotal: price * q,
            }));
        }
    };


    return (
        <Card className='favorite-product'>
            <CardImage>
                <Image src={image} aspectRatio='9-16' />
            </CardImage>
            <CardContent>
                <h3 className='favorite-product__title'>{title}</h3>
                <p className='favorite-product__price'>S/ {price}</p>
                <div className='favorite-product__actions'>
                    <Counter
                        count={q}
                        minValue={1}
                        onCountChange={handleCount}
                        className='favorite-product__counter'
                    />
                    <IconAction
                        ref={iconActionRef}
                        iconDefault={<BsCartDash />}
                        iconAction={<MdAddShoppingCart />}
                        activeAction={!changeActiveActionCart || q !== changeActiveActionCart.quantity}
                        onAction={handleAction}
                        className='favorite-product__iconAction'
                    />
                </div>
            </CardContent>
            <IconButton
                className='favorite-product__close'
                onClick={removeProduct}
            >
                <AiOutlineClose />
            </IconButton>
        </Card>
    );
};
export default FavoriteProduct;