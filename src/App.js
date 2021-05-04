/** @format */

import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

class App extends Component {
	state = {
		product: [
			{ id: 1, name: 'Age', price: '$9.35', status: 'sale' },
			{ id: 2, name: 'Persel', price: '$59.50', status: 'sale' },
			{
				id: 3,
				name: 'Head & sholdures',
				price: '$22.77',
				status: 'sale',
			},
			{ id: 4, name: 'Tomato', price: '$6.50', status: 'sale' },
			{ id: 5, name: 'Chase', price: '$14.99', status: 'sale' },
			{ id: 6, name: 'Apple', price: '$9.00', status: 'sale' },
			{ id: 7, name: 'panana', price: '$19.99', status: 'sale' },
			{ id: 8, name: 'perel', price: '$12.35', status: 'sale' },
			{ id: 9, name: 'Tissue paper', price: '$5.85', status: 'sale' },
		],
	};
	render() {
		return (
			<div className='App'>
				<div className='container-fluid'>
					<Header />
				</div>
				<div className='container' style={{ marginTop: '150px' }}>
					<div className=''>
						{this.state.product.map( prod => 
							<Product key={prod.id}
								name={prod.name}
								price={prod.price}
								status = {prod.status}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
