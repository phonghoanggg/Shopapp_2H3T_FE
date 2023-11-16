'use client';
import { map } from 'lodash';
// base
import Image from 'next/image';
import Link from 'next/link';
// swiper
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
interface CategoriesProps {
	data: any;
	isLoading: any;
	error: any;
}

export default function Categories({ data, isLoading, error }: CategoriesProps) {
	return (
		<section className="site-categories">
			<h4 className="content _text-center">
				<p className="content-title">Clothing </p>
				<span>/</span>
				<span className="sub-content">Women</span>
			</h4>
			<p className="title _text-center">WOMEN&#39;S CLOTHES</p>
			<div className="categories-list">
				{isLoading ? (
					// Display loading skeleton
					<div className="loading-skeleton">
						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="category-item-skeleton"
							>
								<div className="skeleton-image"></div>
								<div className="skeleton-name"></div>
							</div>
						))}
					</div>
				) : (
					// Display categories when data is available
					<Swiper
						slidesPerView={2.2}
						spaceBetween={12}
						scrollbar={{
							hide: false,
						}}
						breakpoints={{
							'768': {
								slidesPerView: 3.2,
								spaceBetween: 16,
							},
							'1024': {
								slidesPerView: 4.2,
								spaceBetween: 32,
							},
						}}
						modules={[Scrollbar]}
						className="swiper-categories"
					>
						{/* render Categories */}
						{map(data?.data, (item) => (
							<SwiperSlide key={item.id}>
								<div className="category-item">
									<Link
										href="/"
										className="image"
									>
										<Image
											alt="category-item"
											width={500}
											height={500}
											loading="lazy"
											src={item.images}
										/>
									</Link>
									<Link
										rel="stylesheet"
										href="/"
										className="category-link"
									>
										{item.name}
									</Link>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</section>
	);
}
