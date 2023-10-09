'use client';
// lodash
import { map } from 'lodash';
// Import Swiper React components
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// contains
import { PRODUCT_LIST } from './constains';
// components
import Product from '@/components/Product';

const ProductBestSeller = () => {
	return (
		<section className="site-products">
			<h6 className="title _text-center _text-uppercase">BESTSELLERS WE RECOMMEND</h6>
			<Swiper
				slidesPerView={2.2}
				spaceBetween={12}
				freeMode={true}
				modules={[FreeMode]}
				className="swiper-list"
				breakpoints={{
					'500': {
						slidesPerView: 3.2,
						spaceBetween: 16,
					},
					'768': {
						slidesPerView: 4.2,
						spaceBetween: 24,
					},
					'992': {
						slidesPerView: 5.2,
						spaceBetween: 24,
					},
					'1024': {
						slidesPerView: 6.2,
						spaceBetween: 32,
					},
				}}
			>
				{map(PRODUCT_LIST, ({ id, name, image, price, oldPrice }) => (
					<SwiperSlide
						className="product-list"
						key={id}
					>
						<Product
							name={name}
							price={price}
							image={image}
							oldPrice={oldPrice}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default ProductBestSeller;
