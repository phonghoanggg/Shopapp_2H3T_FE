import { ROUTER } from '@/utils/routes/routes';
import Link from 'next/link';

const CartPayment = () => {
	return (
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
	);
};

export default CartPayment;
