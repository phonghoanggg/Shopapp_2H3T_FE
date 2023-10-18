'use client';
// base
import { useState } from 'react';
// components
import SectionProducts from '@/components/SectionProducts';
import Image from 'next/image';
// lodash
import { map } from 'lodash';
// icons
import {
	BsStarFill,
	BsStarHalf,
	HiOutlineMinusSm,
	IoIosArrowDown,
	IoIosArrowUp,
	MdOutlineAdd,
	MdReportGmailerrorred,
	PiShoppingBagOpenBold,
	TbHeart,
} from '../../compound/icons/index';
// swiper
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// constants
import Button from '@/compound/demo-button/button/Button';
import { BREAKPOINTS } from '@/utils/breakpoints/constants';
import { PRODUCT_LIST } from '../home/constants';
import { LIMIT, PAYMENT_METHOD, THUMBS_IMAGES } from './constants';

const PageProductDetail = () => {
	const [activeThumb, setActiveThumb] = useState<any>(null);
	const [quantity, setQuantity] = useState(1);

	const [activePaymentMethod, setActivePaymentMethod] = useState<string>('Ship');

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
		if (quantity === 1) {
			return;
		}
	};

	return (
		<main className="site-detail">
			<section className="detail container">
				{/* slide Image product */}
				<div className="detail-slide">
					<div className="swiper-thumbsImages">
						<Swiper
							className="gallery-product-detail"
							modules={[Thumbs, Navigation]}
							onSwiper={setActiveThumb}
							navigation={{
								nextEl: '.product-detail-actions > .action.-next',
								prevEl: '.product-detail-actions > .action.-prev',
							}}
							breakpoints={{
								[BREAKPOINTS.xs]: {
									slidesPerView: LIMIT.THUMB_MOBILE,
									direction: 'horizontal',
									slidesPerGroup: LIMIT.THUMB_MOBILE,
									allowTouchMove: true,
									spaceBetween: 10,
								},
								[BREAKPOINTS.sm]: {
									slidesPerView: LIMIT.THUMB_MOBILE,
									direction: 'vertical',
									slidesPerGroup: LIMIT.THUMB_MOBILE,
									allowTouchMove: true,
									spaceBetween: 10,
								},
								[BREAKPOINTS.lg]: {
									slidesPerView: LIMIT.THUMB_DESKTOP,
									direction: 'vertical',
									slidesPerGroup: LIMIT.THUMB_DESKTOP,
									allowTouchMove: false,
									spaceBetween: 35,
								},
							}}
						>
							{THUMBS_IMAGES.map((thumb) => (
								<SwiperSlide
									className="gallery-product-detail-item"
									key={thumb.id}
								>
									<Image
										className="slide-image"
										width={150}
										height={150}
										src={thumb.src}
										alt={`Thumbnail ${thumb.id}`}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="product-detail-actions">
							<button
								type="button"
								className="action -prev"
							>
								<IoIosArrowUp />
							</button>
							<button
								type="button"
								className="action -next"
							>
								<IoIosArrowDown />
							</button>
						</div>
					</div>
					{/* end of thumbnails */}
					<div className="main-slide">
						<Swiper
							slidesPerView={1}
							spaceBetween={20}
							className="main-slide-image-product-detail"
							modules={[Thumbs]}
							thumbs={{
								swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
							}}
						>
							{map(THUMBS_IMAGES, (it) => (
								<SwiperSlide
									key={it?.id}
									className="main-swiper-slide"
								>
									<div className="item-main-slide">
										<Image
											width={600}
											height={740}
											src={it?.src}
											alt=""
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					{/* end of main slide */}
				</div>
				{/* information product */}
				<div className="detail-info ">
					<div className="detail-title">
						<p>SonTruong&#39;s® Premium</p>
						<h3 className="name">superlow bootcut womans jean</h3>
						<div className="detail-icons">
							<div className="detail-icon">
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarHalf />
							</div>
							<span>(39)</span>
						</div>
						<p className="detail-price">$78.98</p>
						<div className="detail-content">2+ for $49 Each: Applied at Checkout</div>
					</div>
					<div className="detail-size">
						<div className="title">Size</div>
						<div className="size-list _text-uppercase">
							<div className="item">s</div>
							<div className="item">m</div>
							<div className="item">l</div>
							<div className="item">xl</div>
						</div>
					</div>
					<div className="detail-quantity">
						<div className="title">Select Quantity</div>
						<div className="action">
							<button
								type="button"
								disabled={quantity === 1}
								className="item"
								onClick={decreaseQuantity}
							>
								<HiOutlineMinusSm />
							</button>
							<span className="item">{quantity}</span>
							<button
								type="button"
								className="item"
								onClick={increaseQuantity}
							>
								<MdOutlineAdd />
							</button>
						</div>
					</div>
					<div className="detail-payment-method-list">
						{map(PAYMENT_METHOD, ({ title, content }) => (
							<div
								className={`item ${activePaymentMethod === title ? '-active' : ''}`}
								onClick={() => setActivePaymentMethod(title)}
								key={title}
							>
								<h3 className="title">{title}</h3>
								<span className="description">{content}</span>
							</div>
						))}
					</div>
					<div className="detail-disable">
						<p className="item">Select Your Store</p>
					</div>

					<div className="description">
						<h4 className="title">Description</h4>
						<div className="detail-description">
							<p>
								These jeans are straight out of the 00s, featuring one of our lowest rises ever. They
								are bootcut just like the iconic styles of that era, with a name that throws it back to
								our SuperLow glory days.
							</p>
						</div>
					</div>
					<div className="detail-nature">
						<p className="item">Style # A46790000</p>
						<p className="items">Color: Black - Dark Wash</p>
					</div>
					<div className="detail-click">
						<p className="item">Add to Bag</p>
					</div>
					<div className="detail-note">
						<div>
							<PiShoppingBagOpenBold size={20} />
							<span>Free Shipping and Returns for Levis® Red</span>
						</div>
						<div>
							<p>Tab™ Members</p>
							<MdReportGmailerrorred size={20} />
						</div>
					</div>
				</div>
				{/* button fixed */}
				<div className="actions-fixed">
					<button
						type="button"
						className="button-add-favorite"
					>
						<TbHeart />
					</button>
					<Button className="button-add-product">Add to Bag</Button>
				</div>
			</section>
			{/* section product */}
			<SectionProducts
				title="YOU MAY ALSO LIKE"
				productList={PRODUCT_LIST}
			/>
			<SectionProducts
				title="CUSTOMERS ALSO BOUGHT"
				productList={PRODUCT_LIST}
			/>
		</main>
	);
};

export default PageProductDetail;
