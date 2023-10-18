import OrderFormInformation from './OrderFormInformation';
import OrderPayment from './OrderPayment';

export default function PageOrder() {
	return (
		<main className="site-order-page">
			<section className="order container">
				<div className="wrapper">
					<OrderFormInformation />
					<OrderPayment />
				</div>
			</section>
		</main>
	);
}
