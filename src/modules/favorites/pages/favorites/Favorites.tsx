import './favorites.scss';
import { FavoriteProduct } from '../../ui';
import { useAppSelector } from '../../../../store';
import { Container } from '../../../../bemit/objects';
import { Image } from '../../../../bemit/components';


const Favorites = () => {

    const { products } = useAppSelector(state => state.favorite);

    return (
        <Container className='favorites animate__animated animate__fadeIn'>
            {
                products.length
                    ? products.map((p) => (
                        <FavoriteProduct key={p.id} {...p} />
                    ))
                    : (
                        <div className='favorites__empty'>
                            <Image
                                aspectRatio='1-1'
                                src='https://cdn.dribbble.com/users/1639273/screenshots/4897055/media/b23d4908df82e11bfe4e11072c41a7bb.png?compress=1&resize=400x300&vertical=top'
                            />
                            <h3>Lista de favoritos vacía</h3>
                        </div>
                    )
            }
        </Container>
    );
};
export default Favorites;