'use client';
// base
import Image from 'next/image';
import Link from 'next/link';
// swiper
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Categories = () => {
	return (
		<section className="site-categories">
			<h4 className="category _text-center">
				Clothing <span className="sub-category">Women</span>
			</h4>
			<p className="title _text-center">WOMEN&#39;S CLOTHES</p>
			<div className="categories-list">
				<Swiper
					slidesPerView={1.2}
					spaceBetween={32}
					scrollbar={{
						hide: false,
					}}
					breakpoints={{
						'500': {
							slidesPerView: 2.2,
							spaceBetween: 16,
						},
						'768': {
							slidesPerView: 23.2,
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
					<SwiperSlide className="category-item">
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Jeans
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Shorts
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Pants
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Jean Jackets & Outerwear
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Sweaters & Sweatshirts
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Tops & T-Shirts
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href="/">
							<Image
								alt="category-item"
								width={500}
								height={500}
								src="https://lscoecomm.scene7.com/is/image/lscoecomm/womens_shop_pants_A47070002?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=500"
							/>
						</Link>
						<Link
							rel="stylesheet"
							href="/"
						>
							Overalls & Jumpsuits
						</Link>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
