import React, { useContext } from 'react';

//Contexts
import { CartContext } from "../contexts/CartContext";

const Item = props => {
	const cart = useContext(CartContext);
	//console.log('shopping card item props', props);
	//console.log('cart in the shopping cart item function', cart.cart);
	//console.log('id', props.id);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(cart.cart[props.id - 1])}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
