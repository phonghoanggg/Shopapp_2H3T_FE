// components
import Product from '@/components/Product';
import { LoadingSkeletonProduct } from './loading';
// lodash
import { map } from 'lodash';
// base
import Link from 'next/link';
// icons
import { GrFormNext, GrFormPrevious } from '../../compound/icons/index';
// contains
import { ROUTER } from '@/utils/routes/routes';
import { NUMBER_PAGE } from './contains';
// use query

interface IProductProps {
	DATA_PRODUCTS: any;
	LOADING_PRODUCT: any;
	ERROR_PRODUCT: any;
}

export default function ProductsList({ DATA_PRODUCTS, LOADING_PRODUCT, ERROR_PRODUCT }: IProductProps) {
	// handle loading

	if (LOADING_PRODUCT || !DATA_PRODUCTS.products) {
		return <LoadingSkeletonProduct />;
	}
	// handle error

	if (ERROR_PRODUCT) {
		return (
			<div className="error-message">
				<p>Something went wrong. Please try again later.</p>
			</div>
		);
	}

	return (
		<section className="wrapper-product-list">
			<div className="main-products-list">
				{map(DATA_PRODUCTS.products, (product) => (
					<Product
						brand="Son's Premium"
						key={product._id}
						name={product.name}
						images={product.images}
						price={product.price}
						discount={product.discount}
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
