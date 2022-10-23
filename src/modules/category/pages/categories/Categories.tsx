import './categories.scss';
import { HeaderAction } from '../../../ecommerce';
import { Container } from '../../../../bemit/objects';

const Categories = () => {

    return (
        <div className='categories  animate__animated animate__bounceInUp'>
            <HeaderAction title='Categorias' />
            <Container>
                Categories
            </Container>
        </div>
    );
};
export default Categories;