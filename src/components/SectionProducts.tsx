'use client';
import Product from '@/components/Product';
import { map } from 'lodash';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ProductData {
	id: number;
	name: string;
	image: string;
	price: number;
	oldPrice?: number;
}

interface ProductListProps {
	title: string;
	productList: ProductData[];
}

const SectionProducts: React.FC<ProductListProps> = ({ title, productList }) => {
	const configSwiper = {
		slidesPerView: 2.2,
		spaceBetween: 12,
		freeMode: true,
		modules: [FreeMode],
		className: 'swiper-list',
		breakpoints: {
			500: {
				slidesPerView: 3.2,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 4.2,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 5.2,
				spaceBetween: 24,
			},
			1024: {
				slidesPerView: 5.9,
				spaceBetween: 32,
			},
		},
	};
	return (
		<section className="site-products">
			<h6 className="title _text-center _text-uppercase">{title}</h6>
			<Swiper {...configSwiper}>
				{map(productList, ({ id, name, image, price, oldPrice }) => (
					<SwiperSlide
						className="product-list"
						key={`product-item-${id}`}
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

export default SectionProducts;
