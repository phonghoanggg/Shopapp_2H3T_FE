import SectionProducts from '@/components/SectionProducts';
import { ROUTER } from '@/utils/routes/routes';
import Link from 'next/link';
import { PRODUCT_LIST } from '../home/constants';
import CartProductList from './CartProductList';

const PageCart = () => {
	return (
		<main className="main-page-cart">
			<section className="page-cart-wrapper container">
				<div className="shopping-cart-inner">
					{/* notification */}
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
					<CartProductList />
				</div>
				{/* payment */}
				<div className="payment-cart-inner">
					<h4 className="title _text-uppercase">payment summary</h4>
					<div className="promo-box">
						<h5 className="sub-title">Promotions</h5>
						<p className="content">Promo Details</p>
					</div>
					<div className="promo-phase">
						<h5 className="sub-title">Items</h5>
						<p className="content">$152.48</p>
					</div>
					<div className="promo-phase">
						<h5 className="sub-title">Shipping</h5>
						<p className="content">Free</p>
					</div>
					<div className="promo-phase">
						<h5 className="sub-title">Estimated Tax</h5>
						<p className="content">Calculated in Checkout</p>
					</div>

					<div className="total-box">
						<h5 className="sub-title">Total</h5>
						<p className="content">$152.48</p>
					</div>
					<Link
						href={ROUTER.ORDER}
						className="button-checkout"
					>
						Checkout
					</Link>
				</div>
			</section>
			{/* login favorite */}
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
			{/* product flex*/}
			<SectionProducts
				title="CUSTOMERS ALSO BOUGHT"
				productList={PRODUCT_LIST}
			/>
		</main>
	);
};

export default PageCart;
