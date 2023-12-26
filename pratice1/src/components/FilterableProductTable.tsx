import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import type Product from '../types/Product';

type FilterableProductTableProsp = {
	products: Product[];
};

const FilterableProductTable = ({products}: FilterableProductTableProsp) => (
	<div className='products-contatiner'>
		<SearchBar />
		<ProductTable products={products} />
	</div>
);

export default FilterableProductTable;
