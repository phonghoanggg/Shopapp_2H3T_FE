import Categories from './Categories';
import ProductsList from './ProductsList';
import Sidebar from './Sidebar';

const PageProducts = () => {
	return (
		<main className="site-products-pag container">
			<Categories />
			<section className="main-products-list">
				<Sidebar />
				<ProductsList />
			</section>
		</main>
	);
};

export default PageProducts;
