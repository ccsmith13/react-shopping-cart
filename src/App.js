import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from "./contexts/CartContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		let currentCart = cart.slice();
		currentCart.push(item);
		setCart(currentCart);
	};

	const removeItem = item => {
		//console.log('remove item function is being called. here is the item being passed in:', item)
		let currentCart = cart.slice();
		//console.log('current cart in the remove item function', currentCart);
		let itemIndex = currentCart.indexOf(item);
		currentCart.splice(itemIndex, 1);
		setCart(currentCart);
		//console.log('final cart leaving the remove item function', cart);
	}

	return (
		<ProductContext.Provider value={{ products, addItem, removeItem }}>
			<CartContext.Provider value={{ cart }}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />

				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
