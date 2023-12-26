import React from 'react';

const ProductCategoryRow = ({category}: {category: string}) => (
	<tr>
		<th colSpan={2}>{category}</th>
	</tr>
);

export default ProductCategoryRow;
