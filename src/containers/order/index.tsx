import Image from 'next/image';

export default function PageOrder() {
	return (
		<main className="site-order-page">
			<section className="order container">
				<div className="order-wrapper">
					<div className="order-left">
						<h3 className="order-title">SECURE CHECKOUT</h3>
						<form className="order-form">
							<div className="order-form-box">
								<div className="form-item">
									<h3 className="order-form-title">Shipping Address</h3>
									<label htmlFor="name">Name*</label>
									<input id="name" />
								</div>
								<div className="form-item">
									<label htmlFor="address">Address*</label>
									<input id="address" />
								</div>
								<div className="form-item">
									<label htmlFor="phone">Phone Number*</label>
									<input
										id="phone"
										type="number"
									/>
								</div>
								<div className="form-item">
									<label htmlFor="note">Note for shipper*</label>
									<input
										id="note"
										placeholder=""
									/>
								</div>
							</div>
							<button
								className="form-submit"
								type="submit"
							>
								Save
							</button>
						</form>
					</div>
					<div className="order-right">
						<h3 className="order-title">ORDER SUMMARY</h3>
						<div className="order-items">
							<span>Items</span>
							<span>1</span>
						</div>
						<div className="order-items">
							<span>Estimated Tax</span>
							<span>Calculated in Checkout</span>
						</div>
						<div className="order-items">
							<p>Shipping</p>
							<p>Free</p>
						</div>
						<div className="order-total">
							<span>Total</span>
							<span>$123</span>
						</div>
						<div className="order-cart">
							<div className="order-cart-head">
								<p>Shopping Bag</p>
							</div>

							<div className="order-cart-number">1 item</div>
							<div className="order-cart-lists">
								<div className="order-cart-items">
									<div className="order-cart-img">
										<Image
											width={500}
											height={500}
											loading="lazy"
											src="https://lsco.scene7.com/is/image/lsco/D75910003-alt1-pdp-lse?$grid_desktop_full$"
											alt="product cart item"
										/>
									</div>
									<div className="order-cart-desc">
										<p className="order-cart-name">501® High Rise Women&#39;s Shorts</p>
										<p className="order-cart-price">78.94$</p>
										<p className="order-cart-size">
											M <span>Quantity:2</span>
										</p>
										<p className="order-cart-subTotal">
											Total <span>$130</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
