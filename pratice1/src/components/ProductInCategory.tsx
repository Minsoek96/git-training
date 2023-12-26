import React from 'react';

import type Product from '../types/Product';

import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import {selectProducts} from '../utils/selectProducts';

type ProductInCategoryProps = {
	category: string;
	products: Product[];
};

const ProductInCategory = ({category, products}: ProductInCategoryProps) => {
	const productInCategory = selectProducts(products, category);
	return (
		<>
			<ProductCategoryRow category={category} />
			{productInCategory.map(product => (
				<ProductRow key={product.name} product={product} />
			))}
		</>
	);
};

export default ProductInCategory;
