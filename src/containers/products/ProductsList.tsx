import Product from '@/components/Product';
import { map } from 'lodash';
import { PRODUCT_LIST } from '../home/constains';
import Pagination from './Pagination';

export default function ProductsList() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<section className="main-products-list">
				{map(PRODUCT_LIST, ({ id, name, image, price, oldPrice }) => (
					<Product
						key={id}
						name={name}
						image={image}
						price={price}
						oldPrice={oldPrice}
						button="Quick Add"
					/>
				))}
			</section>
			{/* pagination */}
			<Pagination />
		</div>
	);
}
