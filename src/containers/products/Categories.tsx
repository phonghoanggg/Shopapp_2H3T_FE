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
// contains
import { slidesPerView, spaceBetween } from './contains';
import { LoadingSkeletonCategory } from './loading';
// interface
import { Category } from '@/utils/interface';

interface ICategoryProps {
	DATA_CATEGORIES: Category[];
	LOADING_CATEGORIES?: boolean;
	ERROR_CATEGORIES: any;
}

export default function Categories({ DATA_CATEGORIES, LOADING_CATEGORIES, ERROR_CATEGORIES }: ICategoryProps) {
	return (
		<section className="site-categories">
			{ERROR_CATEGORIES && (
				<div className="error-message">
					<p>Something went wrong. Please try again later.</p>
				</div>
			)}
			{!ERROR_CATEGORIES && (
				<>
					<h4 className="content _text-center">
						<p className="content-title">Clothing </p>
						<span>/</span>
						<span className="sub-content">Women</span>
					</h4>
					<p className="title _text-center">WOMEN&#39;S CLOTHES</p>
					<div className="categories-list">
						{LOADING_CATEGORIES || !DATA_CATEGORIES ? (
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
								{map(DATA_CATEGORIES, (item) => (
									<SwiperSlide key={item._id}>
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
													src={item.image}
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
