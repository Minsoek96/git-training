import React from 'react';

import type Product from '../types/Product';

type ProductRowProps = {
	product: Product;
};
const ProductRow = ({product}: ProductRowProps) => (
	<tr>
		<td>{product.name}</td>
		<td>{product.price}</td>
	</tr>
);

export default ProductRow;
