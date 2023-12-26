import type Product from '../types/Product';

export const selectProducts = (products: Product[], category: string) =>
	products.filter(product => product.category === category);
