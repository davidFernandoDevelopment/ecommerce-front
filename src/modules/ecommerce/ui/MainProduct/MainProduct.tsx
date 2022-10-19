import { Button } from '../../../../bemit/components';
import './main-product.scss';

const MainProduct = () => {
    return (
        <div className='main-product'>
            <div className="main-product__data">
                <div className='main-product__data-content'>
                    <h1 className="main-product__data-title">
                        MBJ Women's Solid Short Sleeve Boat Neck V
                    </h1>
                    <p className="main-product__data-description">
                        95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem
                    </p>
                    <span className="main-product__data-price">
                        S/ 9.85
                    </span>
                </div>
                <Button
                    size='small'
                >
                    Agregar al carrito
                </Button>
            </div>
            <div className="main-product__bg-img">
                <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="Main product" />
            </div>
        </div>
    );
};
export default MainProduct;