import Image from 'next/image';

const OrderPayment = () => {
	return (
		<div className="order-payment-wrapper">
			<h3 className="title">ORDER SUMMARY</h3>
			<div className="item">
				<span>Items</span>
				<span>1</span>
			</div>
			<div className="item">
				<span>Estimated Tax</span>
				<span>Calculated in Checkout</span>
			</div>
			<div className="item">
				<p>Shipping</p>
				<p>Free</p>
			</div>
			<div className="total">
				<span>Total</span>
				<span>$123</span>
			</div>
			<div className="order-list-cart-wrapper">
				<h6 className="title">Shopping Bag</h6>

				<p className="number">1 item</p>
				<div className="list-item-order-box">
					<div className="item">
						<div className="image">
							<Image
								width={500}
								height={500}
								loading="lazy"
								src="https://lsco.scene7.com/is/image/lsco/D75910003-alt1-pdp-lse?$grid_desktop_full$"
								alt="product cart item"
							/>
						</div>
						<div className="desc">
							<p className="name">501® High Rise Women&#39;s Shorts</p>
							<p className="price">78.94$</p>
							<p className="size">
								M <span>Quantity:2</span>
							</p>
							<p className="total">
								Total: <span>$130</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderPayment;
