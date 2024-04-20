'use client';
import { Fragment } from 'react';
// components
import SectionProducts from '@/components/SectionProducts';
import Categories from './Categories';
import ProductsList from './ProductsList';
import Sidebar from './Sidebar';
// react-query
import { useCategoriesQuery } from '@/query/categories/getCategories';
import { useProductsQuery } from '@/query/products/getDataProducts';
// icons
import { BsFilterLeft } from '../../compound/icons/index';
// constants
import { PRODUCT_LIST_SAME } from '../home/constants';

const PageProducts = () => {
	// handle get data api use react-query
	const { data: DATA_CATEGORIES, isLoading: LOADING_CATEGORIES, error: ERROR_CATEGORIES } = useCategoriesQuery();
	const { data: DATA_PRODUCTS, isLoading: LOADING_PRODUCT, error: ERROR_PRODUCT } = useProductsQuery();
	let totalProducts = DATA_PRODUCTS ? DATA_PRODUCTS.totalProducts : '?';

	return (
		<Fragment>
			<main className="site-products-page container">
				<Categories
					DATA_CATEGORIES={DATA_CATEGORIES}
					LOADING_CATEGORIES={LOADING_CATEGORIES}
					ERROR_CATEGORIES={ERROR_CATEGORIES}
				/>
				<section className="main-section-products">
					{/*  sub categories */}
					<div className="filter-wrapper">
						<div className="filters-inner">
							<div className="filter">
								<BsFilterLeft size={22} />
								Filter
							</div>
							<div className="filter">
								<label htmlFor="filter-select-products">Sort by</label>
								<select
									name="filter-select-products"
									id="filter-select-products"
									className="filter-select-products"
								>
									<option value="recommended">Recommended</option>
									<option value="Price-Low-Hight">Price Low-Hight</option>
									<option value="Price-Hight-Low">Price Hight-Low</option>
								</select>
							</div>
						</div>
						<span className="total-products">{totalProducts} items</span>
					</div>
					<div className="products-wrapper">
						{/* sidebar filter product */}
						<Sidebar />
						{/* products */}
						<ProductsList
							DATA_PRODUCTS={DATA_PRODUCTS}
							LOADING_PRODUCT={LOADING_PRODUCT}
							ERROR_PRODUCT={ERROR_PRODUCT}
						/>
					</div>
				</section>
			</main>
			<SectionProducts
				title="RECENTLY VIEWED"
				productList={PRODUCT_LIST_SAME}
			/>
		</Fragment>
	);
};

export default PageProducts;
