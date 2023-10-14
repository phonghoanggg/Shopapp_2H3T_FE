'use client';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { MdReportGmailerrorred } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const PageProductDetail = () => {
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

	// SwiperCore.use([Pagination]);

	const imageSources = [
		'https://lsco.scene7.com/is/image/lsco/A46790000-front-pdp?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=660&hei=726',
		'https://lsco.scene7.com/is/image/lsco/A46790000-side-pdp?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=660&hei=726',
		'https://lsco.scene7.com/is/image/lsco/A46790000-back-pdp?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=660&hei=726',
	];

	const paginationImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

	return (
		<main className="container">
			<div className="detail">
				<div className="detail-slide">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{imageSources.map((src, index) => (
								<div
									key={index}
									className="swiper-slide"
								>
									<Image
										width={10}
										height={20}
										src={src}
										alt={`product-detail-${index}`}
									/>
								</div>
							))}
						</div>
						<div className="pagination-container">
							{paginationImages.map((src, index) => (
								<div
									key={index}
									className="pagination-item"
								>
									<Image
										width={10}
										height={20}
										src={src}
										alt={`pagination-${index}`}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="detail-info">
					<div className="detail-title">
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
						<p className="detail-price">$ 789</p>
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
								disabled={quantity === 1}
								className="item"
								onClick={decreaseQuantity}
							>
								-
							</button>
							<span className="item">{quantity}</span>
							<button
								className="item"
								onClick={increaseQuantity}
							>
								+
							</button>
						</div>
					</div>
					<div className="detail-payment-method-list">
						<div className="item active-payment-method">
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
					<div className="detail-click">
						<p className="item">Add to bag</p>
					</div>
					<div className="detail-note">
						<div className="icon">
							<PiShoppingBagOpenBold />
						</div>
						<span>Free Shipping and Returns</span>
						<p>for Levis® Red Tab™ Members</p>
						<div className="icons">
							<MdReportGmailerrorred />
						</div>
					</div>
					<div className="detail-description">
						<p className="document">
							These jeans are straight out of the 00s, featuring one of our lowest rises ever. They are
							bootcut just like the iconic styles of that era, with a name that throws it back to our
							SuperLow glory days.
						</p>
						<ul>
							<li>Low-rise bootcut jeans</li>
							<li>Featuring one of our lowest rises ever</li>
							<li>Modeled after iconic Levis® Superlow styles from the 2000s</li>
							<li>For a full on Y2K look, pair them with one of our smocked tanks</li>
						</ul>
					</div>
					<div className="detail-nature">
						<p className="item">Style # A46790000</p>
						<p className="items">Color: Black - Dark Wash</p>
					</div>
				</div>
			</div>
			<div className="evaluate">
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
			<div className="custom">
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
			<div className="comment">
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
				<div className="button-search">Load More</div>
			</div>
		</main>
	);
};

export default PageProductDetail;
