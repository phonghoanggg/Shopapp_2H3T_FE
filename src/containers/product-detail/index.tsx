'use client';

import { BREAKPOINTS } from '@/utils/constants';
import { map } from 'lodash';
import Image from 'next/image';
import { useState } from 'react';
import { BsCheckCircleFill, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineAdd, MdReportGmailerrorred } from 'react-icons/md';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LIMIT, thumbsImages } from './constains';

const PageProductDetail = () => {
	const [activeThumb, setActiveThumb] = useState<any>(null);
	const [quantity, setQuantity] = useState(1);

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
		<main className="container">
			<div className="detail">
				<div className="detail-slide">
					<div className="swiper-thumbsImages">
						<Swiper
							spaceBetween={20}
							className="gallery-product-detail"
							modules={[Thumbs, Navigation]}
							onSwiper={setActiveThumb}
							navigation={{
								nextEl: '.product-detail-actions > .action.-next',
								prevEl: '.product-detail-actions > .action.-prev',
							}}
							watchSlidesProgress
							watchOverflow
							centerInsufficientSlides
							breakpoints={{
								[BREAKPOINTS.xs]: {
									slidesPerView: LIMIT.THUMB_MOBILE,
									direction: 'horizontal',
								},
								[BREAKPOINTS.sm]: {
									slidesPerView: LIMIT.THUMB_DESKTOP,
									direction: 'vertical',
									slidesPerGroup: LIMIT.THUMB_DESKTOP,
								},
								[BREAKPOINTS.md]: {
									slidesPerView: LIMIT.THUMB_DESKTOP,
									direction: 'vertical',
									slidesPerGroup: LIMIT.THUMB_DESKTOP,
									allowTouchMove: false,
								},
							}}
						>
							{thumbsImages.map((thumb) => (
								<SwiperSlide
									className="gallery-product-detail-item"
									key={thumb.id}
								>
									<Image
										className="slide-image"
										width={155}
										height={155}
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
							spaceBetween={30}
							className="main-slide-image-product-detail"
							modules={[Thumbs]}
							thumbs={{
								swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
							}}
						>
							{map(thumbsImages, (it) => (
								<SwiperSlide
									key={it?.id}
									className="main-swiper-slide"
								>
									<div className="item-main-slide">
										<Image
											style={{ width: '100%', height: '100%' }}
											fill
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
				<div className="detail-info ">
					<div className="detail-title">
						<p>SonTruong&#39;s® Premium</p>
						<h3>superlow bootcut womans jean</h3>
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
						<div className="item ">
							<h3 className="title">Pickup in store</h3>
							<p className="description">Select size to see if item is in stock</p>
						</div>
						<div className="item">
							<h3 className="title">Ship</h3>
							<p className="description">Select size to see if item is in stock</p>
						</div>
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
						<p className="item">Add to bag</p>
					</div>
					<div className="detail-note">
						<PiShoppingBagOpenBold size={20} />
						<span>Free Shipping and Returns</span>
						<p>for Levis® Red Tab™ Members</p>
						<MdReportGmailerrorred size={20} />
					</div>
				</div>
			</div>
			<div className="evaluate ">
				<p className="title">Reviews</p>
				<div className="rank">
					<div className="item1">
						<h3 className="title">Rating Snapshot</h3>
						<div className="filter">
							<div className="title">Select a row below to filter reviews.</div>
							<div className="star">
								<p>5 stars</p>
								<div className="filter">
									<div className="action"></div>
									<div className="icon"></div>
								</div>
								<span>30</span>
							</div>
							<div className="star">
								<p>4 stars</p>
								<div className="filter">
									<div className="action"></div>
									<div className="icon"></div>
								</div>
								<span>30</span>
							</div>
							<div className="star">
								<p>3 stars</p>
								<div className="filter">
									<div className="action"></div>
									<div className="icon"></div>
								</div>
								<span>30</span>
							</div>
							<div className="star">
								<p>2 stars</p>
								<div className="filter">
									<div className="action"></div>
									<div className="icon"></div>
								</div>
								<span>30</span>
							</div>
							<div className="star">
								<p>1 stars</p>
								<div className="filter">
									<div className="action"></div>
									<div className="icon"></div>
								</div>
								<span>30</span>
							</div>
						</div>
					</div>
					<div className="item2">
						<h3 className="title">Rating Snapshot</h3>
						<div className="filter">
							<div className="item">
								<div className="title">4.6</div>
								<div className="rank">
									<div className="star">
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarHalf />
									</div>
									<button className="">39 Reviews</button>
								</div>
							</div>
							<p className="note">28 out of 29 (97%) reviewers recommend this product</p>
						</div>
					</div>
					<div className="item3">
						<h3 className="title">Review this Product</h3>
						<div className="filter">
							<div className="item">
								<div className="items">
									<CiStar />
								</div>
								<div className="items">
									<CiStar />
								</div>
								<div className="items">
									<CiStar />
								</div>
								<div className="items">
									<CiStar />
								</div>
								<div className="items">
									<CiStar />
								</div>
							</div>
							<div className="note">Adding a review will require a valid email for verification</div>
						</div>
					</div>
				</div>
			</div>
			<div className="size">
				<div className="title">Average Customer Ratings</div>
				<div className="action">
					<p className="title">Fit</p>
					<div className="filter">
						<div className="column">
							<div className="item1"></div>
							<div className="item2"></div>
							<div className="item3"></div>
							<div className="item4"></div>
							<div className="item5"></div>
							<div className="item6"></div>
							<div className="item7"></div>
						</div>
						<div className="size-text">
							<p>Small size</p>
							<p>Big size</p>
						</div>
					</div>
				</div>
			</div>
			<div className="custom container">
				<h3 className="title">Customer Images</h3>
				<div className="filter">
					<div className="item">
						<div className="items">
							<Image
								width={171}
								height={171}
								src="https://lsco.scene7.com/is/image/lsco/187590147-dynamic1-pdp?$grid_desktop_full$"
								alt=""
							/>
						</div>
					</div>
					<div className="item">
						<div className="items">
							<Image
								width={171}
								height={171}
								src="https://lsco.scene7.com/is/image/lsco/187590147-dynamic1-pdp?$grid_desktop_full$"
								alt=""
							/>
						</div>
					</div>
					<div className="item">
						<div className="items">
							<Image
								width={171}
								height={171}
								src="https://lsco.scene7.com/is/image/lsco/187590147-dynamic1-pdp?$grid_desktop_full$"
								alt=""
							/>
						</div>
					</div>
					<div className="item">
						<div className="items">
							<Image
								width={171}
								height={171}
								src="https://lsco.scene7.com/is/image/lsco/187590147-dynamic1-pdp?$grid_desktop_full$"
								alt=""
							/>
						</div>
					</div>
					<div className="item">
						<div className="items">
							<Image
								width={171}
								height={171}
								src="https://lsco.scene7.com/is/image/lsco/187590147-dynamic1-pdp?$grid_desktop_full$"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="comment container">
				<div className="search">
					<p className="title">1 - 8 of 40 Reviews</p>
					<select className="action">
						<option value="">Highest to Lowest Rating</option>
						<option value="">Most Relevant</option>
						<option value="">Most Helpful</option>
						<option value="">Lowest to Highest Rating</option>
						<option value="">Most Recent</option>
					</select>
				</div>
				<div className="person">
					<div className="info">
						<div className="title">Truong Huynh</div>
						<div className="check">
							<div className="icon">
								<BsCheckCircleFill />
							</div>
							<p>VERIFIED</p>
						</div>
						<div className="review">
							<p>Reviews</p>
							<div className="strongText">1</div>
						</div>
						<div className="votes">
							<p>Votes</p>
							<div className="strongText">0</div>
						</div>
						<div className="weight">
							<p>Weight</p>
							<div className="strongText">100-120</div>
						</div>
					</div>
					<div className="description">
						<div className="star">
							<div className="item1">
								<div className="stars">
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
								</div>
								<p className="title">My favorite jeans.</p>
							</div>
							<div className="item2">2 days ago</div>
							<div className="item3">Diese Hose sitzt perfekt. Ich bin 160cm mit 53kg 30/27 Grösse.</div>
							<div className="item4">
								<div className="icons">
									<MdReportGmailerrorred />
								</div>
								<p>Yes, I recommend this product.</p>
							</div>
						</div>
						<div className="filter">
							<div className="column">
								<div className="item1"></div>
								<div className="item2"></div>
								<div className="item3"></div>
								<div className="item4"></div>
								<div className="item5"></div>
								<div className="item6"></div>
								<div className="item7"></div>
							</div>
							<div className="size-text">
								<p>Small size</p>
								<p>Big size</p>
							</div>
						</div>
					</div>
				</div>
				<div className="person">
					<div className="info">
						<div className="title">Truong Huynh</div>
						<div className="check">
							<div className="icon">
								<BsCheckCircleFill />
							</div>
							<p>VERIFIED</p>
						</div>
						<div className="review">
							<p>Reviews</p>
							<div className="strongText">1</div>
						</div>
						<div className="votes">
							<p>Votes</p>
							<div className="strongText">0</div>
						</div>
						<div className="weight">
							<p>Weight</p>
							<div className="strongText">100-120</div>
						</div>
					</div>
					<div className="description">
						<div className="star">
							<div className="item1">
								<div className="stars">
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
								</div>
								<p className="title">My favorite jeans.</p>
							</div>
							<div className="item2">2 days ago</div>
							<div className="item3">Diese Hose sitzt perfekt. Ich bin 160cm mit 53kg 30/27 Grösse.</div>
							<div className="item4">
								<div className="icons">
									<MdReportGmailerrorred />
								</div>
								<p>Yes, I recommend this product.</p>
							</div>
						</div>
						<div className="filter">
							<div className="column">
								<div className="item1"></div>
								<div className="item2"></div>
								<div className="item3"></div>
								<div className="item4"></div>
								<div className="item5"></div>
								<div className="item6"></div>
								<div className="item7"></div>
							</div>
							<div className="size-text">
								<p>Small size</p>
								<p>Big size</p>
							</div>
						</div>
					</div>
				</div>
				<div className="person">
					<div className="info">
						<div className="title">Truong Huynh</div>
						<div className="check">
							<div className="icon">
								<BsCheckCircleFill />
							</div>
							<p>VERIFIED</p>
						</div>
						<div className="review">
							<p>Reviews</p>
							<div className="strongText">1</div>
						</div>
						<div className="votes">
							<p>Votes</p>
							<div className="strongText">0</div>
						</div>
						<div className="weight">
							<p>Weight</p>
							<div className="strongText">100-120</div>
						</div>
					</div>
					<div className="description">
						<div className="star">
							<div className="item1">
								<div className="stars">
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
								</div>
								<p className="title">My favorite jeans.</p>
							</div>
							<div className="item2">2 days ago</div>
							<div className="item3">Diese Hose sitzt perfekt. Ich bin 160cm mit 53kg 30/27 Grösse.</div>
							<div className="item4">
								<div className="icons">
									<MdReportGmailerrorred />
								</div>
								<p>Yes, I recommend this product.</p>
							</div>
						</div>
						<div className="filter">
							<div className="column">
								<div className="item1"></div>
								<div className="item2"></div>
								<div className="item3"></div>
								<div className="item4"></div>
								<div className="item5"></div>
								<div className="item6"></div>
								<div className="item7"></div>
							</div>
							<div className="size-text">
								<p>Small size</p>
								<p>Big size</p>
							</div>
						</div>
					</div>
				</div>
				<div className="button-search">Load More</div>
			</div>
		</main>
	);
};

export default PageProductDetail;
