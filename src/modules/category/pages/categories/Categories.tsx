import './categories.scss';
import { HeaderAction } from '../../../ecommerce';
import { Container } from '../../../../bemit/objects';
import { Search } from '../../../../bemit/components';

const Categories = () => {

    const searchCategory = (category: string) => {
        console.log(category);
    };

    return (
        <div className='categories  animate__animated animate__bounceInUp'>
            <HeaderAction title='Categorias' />
            <Container className='categories__content'>
                <Search
                    title='Ingrese la categoría'
                    onValue={searchCategory}
                />
            </Container>
        </div>
    );
};
export default Categories;