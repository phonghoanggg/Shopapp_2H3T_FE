'use client';
// base
import Image from 'next/image';
import Link from 'next/link';
// lodash
import { map } from 'lodash';
// swiper
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// components
import { LoadingSkeletonCategory } from './loading';
// contains
import { slidesPerView, spaceBetween } from './contains';

interface Category {
	id: string;
	images: string;
	name: string;
}

interface CategoriesProps {
	data: {
		data: Category[];
	};
	isLoading: boolean;
	error: any;
}

export default function Categories({ data, isLoading, error }: CategoriesProps) {
	return (
		<section className="site-categories">
			{error && (
				<div className="error-message">
					<p>Something went wrong. Please try again later.</p>
				</div>
			)}
			{!error && (
				<>
					<h4 className="content _text-center">
						<p className="content-title">Clothing </p>
						<span>/</span>
						<span className="sub-content">Women</span>
					</h4>
					<p className="title _text-center">WOMEN&#39;S CLOTHES</p>
					<div className="categories-list">
						{isLoading ? (
							<LoadingSkeletonCategory />
						) : (
							<Swiper
								slidesPerView={slidesPerView.base}
								spaceBetween={spaceBetween.base}
								scrollbar={{ hide: false }}
								breakpoints={{
									'768': {
										slidesPerView: slidesPerView.tablet,
										spaceBetween: spaceBetween.tablet,
									},
									'1024': {
										slidesPerView: slidesPerView.desktop,
										spaceBetween: spaceBetween.desktop,
									},
								}}
								modules={[Scrollbar]}
								className="swiper-categories"
							>
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
				</>
			)}
		</section>
	);
}
