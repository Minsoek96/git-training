import type Product from '../types/Product';
import ProductInCategory from './ProductInCategory';

type ProductTableProps = {
	products: Product[];
};

const ProductTable = ({products}: ProductTableProps) => {
	const categories = products.reduce(
		(acc: string[], product) =>
			acc.includes(product.category) ? acc : [...acc, product.category],
		[],
	);
	return (
		<table className='products'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{categories.map(category => (
					<ProductInCategory
						key={category}
						category={category}
						products={products}
					/>
				))}
			</tbody>
		</table>
	);
};

export default ProductTable;
