'use client';
// base
import Image from 'next/image';
import Link from 'next/link';
// swiper
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Categories() {
	return (
		<section className="site-categories">
			<h4 className="content _text-center">
				<p className="content-title">Clothing </p>
				<span>/</span>
				<span className="sub-content">Women</span>
			</h4>
			<p className="title _text-center">WOMEN&#39;S CLOTHES</p>
			<div className="categories-list">
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
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
					<SwiperSlide>
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
									src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
								/>
							</Link>
							<Link
								rel="stylesheet"
								href="/"
								className="category-link"
							>
								Jeans
							</Link>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
