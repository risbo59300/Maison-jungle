import '../styles/Cart.css';
import {useState} from 'react';
import {useEffect} from 'react'

function Cart({cart, updateCart}) {
	//const [cart, updateCart] = useState(0); // state d'ajout dans le panier

	const [isOpen, setIsOpen] = useState(false); // state pour fermer et ouvrir le panier
	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);

	useEffect(() => {
		document.title = `LMJ : ${total}€ d'achats `;
	}, [total])

	return isOpen ? 
	(
		<div className = 'lmj-cart'>
			<button 
				className='lmj-cart-toggle-button' 
				onClick = {() => setIsOpen(false)}>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2 >Panier</h2>
					<ul>
						{cart.map(({name, price, amount}, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ * {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick = {() => updateCart([])}>
						Vider le panier
					</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button 
				className = 'lmj-cart-toggle-button'
				onClick ={() => setIsOpen(true)}>
				Ouvrir le panier
			</button>
		</div>
	)
}

export default Cart
