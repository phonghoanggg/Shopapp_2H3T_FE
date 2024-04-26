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
import { NUMBER_PAGE } from './contains';
// use query

interface IProductProps {
	DATA_PRODUCTS: any;
	LOADING_PRODUCT: any;
	ERROR_PRODUCT: any;
}

export default function ProductsList({ DATA_PRODUCTS, LOADING_PRODUCT, ERROR_PRODUCT }: IProductProps) {
	// handle error

	return (
		<section className="wrapper-product-list">
			{ERROR_PRODUCT && (
				<div className="error-message-server">
					<p>Something went wrong. Please try again later.</p>
				</div>
			)}
			{LOADING_PRODUCT ? (
				// Assuming LoadingSkeletonProduct is a component for showing loading animation
				<div className="loading-skeleton-product">
					{Array.from({ length: 9 }).map((_, index) => (
						<div
							className="card-is-loading"
							key={index}
						>
							<div className="image"></div>
							<div className="content">
								<h2></h2>
								<h2></h2>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="main-products-list">
					{map(DATA_PRODUCTS?.products, (product) => (
						<Product
							brand="Son's Premium"
							key={product._id}
							id={product._id}
							name={product.name}
							images={product.images}
							price={product.price}
							discount={product.discount}
							sale="30% off $125+ Applied at Checkout"
							button="Quick Add"
						/>
					))}
				</div>
			)}
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
					<p className="label">Next</p> <GrFormNext size={20} />
				</button>
			</div>
		</section>
	);
}
