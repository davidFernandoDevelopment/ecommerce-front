import './products.scss';
import { Container } from '../../../../bemit/objects';
import { useHiddenBottomBar } from '../../../../hooks';


const Products = () => {

    useHiddenBottomBar();


    return (
        <div className='products animate__animated animate__fadeIn'>
            <Container>
                Products
            </Container>
        </div>
    );
};
export default Products;