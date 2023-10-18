const OrderFormInformation = () => {
	return (
		<div className="order-information-inner">
			<h3 className="title">SECURE CHECKOUT</h3>
			<form className="order-form-wrapper">
				<div className="order-form-box">
					<h3 className="items-title">Shipping Address</h3>
					<div className="item">
						<label htmlFor="name">Name*</label>
						<input id="name" />
					</div>
					<div className="item">
						<label htmlFor="address">Address*</label>
						<input id="address" />
					</div>
					<div className="item">
						<label htmlFor="phone">Phone Number*</label>
						<input
							id="phone"
							type="number"
						/>
					</div>
					<div className="item">
						<label htmlFor="note">Note for shipper*</label>
						<input
							id="note"
							placeholder=""
						/>
					</div>
				</div>
				<button
					className="button"
					type="submit"
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default OrderFormInformation;
