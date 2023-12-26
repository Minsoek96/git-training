import React from 'react';

const SearchBar = () => (
	<div className='search'>
		<div>
			<input type='text' placeholder='Serach...' />
		</div>
		<div>
			<input type='checkbox' id='only-stock' />
			<label htmlFor='only-stock'>Only show products in stock</label>
		</div>
	</div>
);
export default SearchBar;
