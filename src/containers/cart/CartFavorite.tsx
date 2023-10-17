const CartFavorite = () => {
	return (
		<section className="cart-favorite container">
			<h4 className="title">YOUR FAVORITES</h4>
			<div className="actions">
				Log In or Sign Up to view your favorite items
				<div className="link">
					<button type="button">Log In</button>
					<button type="button">Sign up</button>
				</div>
			</div>
		</section>
	);
};

export default CartFavorite;
