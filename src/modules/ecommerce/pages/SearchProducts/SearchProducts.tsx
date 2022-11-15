import './search-products.scss';
import { Container } from '../../../../bemit/objects';
import { useHiddenBottomBar } from '../../../../hooks';



const SearchProducts = () => {
    useHiddenBottomBar();

    return (
        <div className='search-products'>
            <Container>
                Search Results
            </Container>
        </div>
    );
};
export default SearchProducts;