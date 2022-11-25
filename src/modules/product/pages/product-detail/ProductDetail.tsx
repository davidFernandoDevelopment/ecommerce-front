import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


import './product-detail.scss';
import { Product } from '../../models';
import { BottomProductDetail } from '../../ui';
import { useCart, useFav } from '../../../../hooks';
import { useAppSelector } from '../../../../store';
import Caracol from '../../../../images/caracol.png';
import { Container } from '../../../../bemit/objects';
import { Counter, StateCounter } from '../../../../ui';
import { HeaderAction, Searching } from '../../../ecommerce';
import { useHiddenBottomBar } from '../../../../hooks/useHiddenBottomBar';
import { Button, Card, CardContent, IconAction, Image } from '../../../../bemit/components';
import classnames from 'classnames';


const ProductDetail = () => {
    const { id } = useParams();
    const [q, setQ] = useState(0);
    const { products } = useAppSelector(state => state.product);
    const [product, setProduct] = useState<Product | null>(null);
    const { product: productFav, handleActionFav } = useFav(id as string, product as Product);
    const { product: productCart, addProductCart, removeProductCart } = useCart(product?.id.toString() || '', product!);

    console.log({ productCart });
    useEffect(() => {
        if (productCart) {
            setQ(productCart.quantity);
            return;
        };
        setQ(0);
    }, [productCart]);

    useHiddenBottomBar(() => {
        if (products.length) {
            let currentProduct = products.find(p => `${p.id}` === id);
            console.log({ products, currentProduct, id });
            if (currentProduct) setProduct(currentProduct);
        }
    }, [products]);

    const handleCount = (state: StateCounter) => {
        if (state === 'plus') {
            setQ(q + 1);
            return;
        }
        setQ(Math.max(q - 1, 0));
    };

    if (!product) return <Searching />;


    const classes = classnames([
        'product-detail',
        'animate__fadeIn',
        'animate__animated',
        { 'show-bottom-bar': q > 0 },

    ]);

    return (
        <div className={classes}>
            <HeaderAction className='product-detail__header'>
                <IconAction
                    p='product-detail'
                    activeAction={!!productFav}
                    onAction={handleActionFav}
                    iconAction={<AiFillHeart />}
                    iconDefault={<AiOutlineHeart />}
                />
            </HeaderAction>
            <Container>
                <Image
                    src={product.image}
                    className='product-detail__image'
                    loadingImg={Caracol}
                />
                <div className='product-detail__cards'>
                    <Card p='product-detail'>
                        <CardContent>
                            <div className='product-detail__data'>
                                <div className='product-detail__info'>
                                    <h3 className='product-detail__name'>{product?.title}</h3>
                                    <h4 className='product-detail__category'>{product?.category}</h4>
                                </div>
                                <h2 className='product-detail__price'>S/ {product?.price}</h2>
                            </div>
                        </CardContent>
                        <Counter
                            count={q}
                            minValue={0}
                            onCountChange={handleCount}
                            className='product-detail__counter'
                        />
                    </Card>
                    <Card p='product-detail'>
                        <CardContent>
                            <h2 className='product-detail__title'>Detalle del producto</h2>
                            <p className='product-detail__description'>{product?.description}</p>
                        </CardContent>
                    </Card>
                </div>
            </Container>
            <BottomProductDetail show={q > 0}>
                <div className='product-detail__priceTotal'>
                    <h4>Precio Total</h4>
                    <h2>S/ {product.price * q}</h2>
                </div>

                {
                    !productCart
                        ? (
                            <Button
                                size='smaller'
                                onClick={() => addProductCart(q)}
                            >
                                Agregar al carrito
                            </Button>
                        )
                        : productCart?.quantity === q
                            ? (
                                <Button
                                    size='smaller'
                                    onClick={() => removeProductCart(productCart.productId as string)}
                                >
                                    Quitar del carrito
                                </Button>
                            )
                            : (
                                <Button
                                    size='smaller'
                                    onClick={() => addProductCart(q)}
                                >
                                    Editar al carrito
                                </Button>
                            )
                }
            </BottomProductDetail>
        </div>
    );
};
export default ProductDetail;