// components
import Product from '@/components/Product';
// lodash
import { map } from 'lodash';
// base
import Link from 'next/link';
// icons
import { GrFormNext, GrFormPrevious } from '../../compound/icons/index';
// contains
import { ROUTER } from '@/utils/routes/routes';
import { PRODUCT_LIST } from '../home/constants';
import { NUMBER_PAGE } from './contains';

export default function ProductsList() {
	return (
		<section className="wrapper-product-list">
			<div className="main-products-list">
				{map(PRODUCT_LIST, ({ id, name, image, price, oldPrice, brand }) => (
					<Product
						key={id}
						name={name}
						image={image}
						price={price}
						discount={oldPrice}
						brand={brand}
						sale="30% off $125+ Applied at Checkout"
						button="Quick Add"
					/>
				))}
			</div>
			{/* pagination */}
			<div className="pagination-wrapper">
				<div className="button">
					<GrFormPrevious size={20} /> <p className="label">Prev</p>
				</div>
				<div className="pagination-list">
					{map(NUMBER_PAGE, ({ number }) => (
						<Link
							key={number}
							href={ROUTER.PRODUCTS}
							className={`item ${number === 1 ? '-active' : ''}`}
						>
							{number}
						</Link>
					))}
				</div>
				<button
					type="button"
					className="button"
				>
					<span className="label">Next</span> <GrFormNext size={20} />
				</button>
			</div>
		</section>
	);
}
