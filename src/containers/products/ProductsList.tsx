// components
import Product from '@/components/Product';
// lodash
import { map } from 'lodash';
// base
// icons
import { GrFormNext, GrFormPrevious } from '../../compound/icons/index';
// contains
import { useState } from 'react';

interface IProductProps {
	DATA_PRODUCTS: any;
	LOADING_PRODUCT: any;
	ERROR_PRODUCT: any;
}

export default function ProductsList({ DATA_PRODUCTS, LOADING_PRODUCT, ERROR_PRODUCT }: IProductProps) {
	const productsPerPage = 9;
	const [currentPage, setCurrentPage] = useState(1);

	const totalProducts = DATA_PRODUCTS?.products?.length || 0;
	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const currentProducts = DATA_PRODUCTS?.products?.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage,
	);

	// Function to handle page change
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<section className="wrapper-product-list">
			{ERROR_PRODUCT && (
				<div className="error-message-server">
					<p>Something went wrong. Please try again later.</p>
				</div>
			)}
			{LOADING_PRODUCT ? (
				<div className="loading-skeleton-product">
					{Array.from({ length: productsPerPage }).map((_, index) => (
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
					{map(currentProducts, (product) => (
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
				<button
					type="button"
					className="button"
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<GrFormPrevious size={20} /> <p className="label">Prev</p>
				</button>
				<div className="pagination-list">
					{Array.from({ length: totalPages }).map((_, index) => {
						const pageNumber = index + 1;
						return (
							<button
								key={pageNumber}
								onClick={() => handlePageChange(pageNumber)}
								className={`item ${pageNumber === currentPage ? '-active' : ''}`}
							>
								{pageNumber}
							</button>
						);
					})}
				</div>
				<button
					type="button"
					className="button"
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<p className="label">Next</p> <GrFormNext size={20} />
				</button>
			</div>
		</section>
	);
}
