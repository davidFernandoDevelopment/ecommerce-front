import { Routes, Route } from 'react-router-dom';

import { ProductDetail, Products } from '../pages';


const ProductRoutes = () => {
	return (
		<Routes>
			<Route index element={<Products />} />
			<Route path='/:id' element={<ProductDetail />} />
		</Routes>
	);
};
export default ProductRoutes;
