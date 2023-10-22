import SectionProducts from '@/components/SectionProducts';
import { PRODUCT_LIST } from '../home/constants';
import CartFavorite from './CartFavorite';
import CartPayment from './CartPayment';
import CartProductList from './CartProductList';
import Notification from './Notification';

const PageCart = () => {
	return (
		<main className="main-page-cart">
			<section className="page-cart-wrapper container">
				<div className="shopping-cart-inner">
					<Notification />
					<CartProductList />
				</div>
				<CartPayment />
			</section>

			<CartFavorite />

			<SectionProducts
				title="CUSTOMERS ALSO BOUGHT"
				productList={PRODUCT_LIST}
			/>
		</main>
	);
};

export default PageCart;
