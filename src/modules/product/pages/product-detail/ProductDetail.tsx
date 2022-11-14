import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


import './product-detail.scss';
import { HeaderAction, Searching } from '../../../ecommerce';
import { useHiddenBottomBar } from '../../../../hooks/useHiddenBottomBar';
import { Button, Card, CardContent, IconAction, Image } from '../../../../bemit/components';
import { Container } from '../../../../bemit/objects';
import { useAppSelector } from '../../../../store';
import { useState } from 'react';
import { Product } from '../../models';


const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useAppSelector(state => state.product);
    const [product, setProduct] = useState<Product | null>(null);

    useHiddenBottomBar(() => {
        if (products.length) {
            let currentProduct = products.find(p => `${p.id}` === id);
            console.log({ products, currentProduct, id });
            if (currentProduct) setProduct(currentProduct);
        }
    }, [products]);

    if (!product) return <Searching />;

    return (
        <div className='product-detail'>
            <HeaderAction className='product-detail__header'>
                <IconAction
                    p='product-detail'
                    iconAction={<AiFillHeart />}
                    iconDefault={<AiOutlineHeart />}
                />
            </HeaderAction>
            <Container>
                <Image src={product.image} className='product-detail__image' />
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
                    </Card>
                    <Card p='product-detail'>
                        <CardContent>
                            <h2 className='product-detail__title'>Detalle del producto</h2>
                            <p className='product-detail__description'>{product?.description}</p>
                        </CardContent>
                    </Card>
                    <Button className='product-detail__button'>
                        Agregar al carrito
                    </Button>
                </div>
            </Container>
        </div>
    );
};
export default ProductDetail;