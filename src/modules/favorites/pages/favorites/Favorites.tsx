import './favorites.scss';
import { FavoriteProduct } from '../../ui';
import { useAppSelector } from '../../../../store';
import { Container } from '../../../../bemit/objects';


const Favorites = () => {

    const { products } = useAppSelector(state => state.favorite);

    return (
        <Container className='favorites animate__animated animate__fadeIn'>
            {
                products.map((p) => (
                    <FavoriteProduct key={p.id} {...p} />
                ))
            }
        </Container>
    );
};
export default Favorites;