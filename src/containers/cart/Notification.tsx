const Notification = () => {
	return (
		<div className="shopping-cart-notify">
			<div className="title">
				Red Tab™ Members get 20% off your first order + free shipping and returns.
				<span className="sub"> Free to join. </span>
			</div>
			<div className="actions">
				<button
					type="button"
					className="action"
				>
					Join Now
				</button>
				or
				<button
					type="button"
					className="action"
				>
					Log In
				</button>
			</div>
		</div>
	);
};

export default Notification;
