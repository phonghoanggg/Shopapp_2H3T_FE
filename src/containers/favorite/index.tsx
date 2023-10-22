import { map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, GrFormClose } from '../../compound/icons/index';
import { MENU_FAVORITE } from './constants';
const PageFavorite = () => {
	return (
		<main className="site-products-pag container">
			{/*navigation favorite */}
			<div className="favorite-account">
				<ul className="account-navigation">
					{map(MENU_FAVORITE, ({ label, route }) => (
						<li
							key={label}
							className="nav-list-item
"
						>
							<Link
								href={route}
								className="link"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				{/* favorite products list */}
				<div className="favorites-list-wrapper ">
					<div className="favorite-title">
						<div className="text">FAVORITES</div>
						<span className="value">4 items</span>
					</div>
					<div className="favorite-product-list">
						<div className="favorite-item">
							<div className="product-image">
								<div className="slide-ratio">
									<Link
										className="cell-image-link"
										href="/"
									>
										<Image
											src="https://lsco.scene7.com/is/image/lsco/005141716-dynamic1-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=534"
											alt="image-product"
											width={600}
											height={500}
										/>
									</Link>
									<button
										type="button"
										className="favorite-button"
									>
										<FaHeart className="icon" />
									</button>
								</div>
							</div>
							<div className="product-info">
								<div className="item-name">
									512™ Slim Taper Fit Mens Jeans <GrFormClose className="icon" />
								</div>
								<div className="item-color">Pictorial - Light Wash - Stretch</div>
								<div className="item-size">30W X 30L</div>
								<div className="item-price">$98.00</div>
								<div className="promo-badge">Buy 2+, Get 30% Off: Applied at Checkout</div>
								<button className="add-to-bag-button">Add to Bag</button>
							</div>
						</div>
						<div className="favorite-item">
							<div className="product-image">
								<div className="slide-ratio">
									<Link
										className="cell-image-link"
										href="/"
									>
										<Image
											src="https://lsco.scene7.com/is/image/lsco/005141716-dynamic1-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=534"
											alt="image-product"
											width={600}
											height={500}
										/>
									</Link>
									<button
										type="button"
										className="favorite-button"
									>
										<FaHeart className="icon" />
									</button>
								</div>
							</div>
							<div className="product-info">
								<div className="item-name">
									512™ Slim Taper Fit Mens Jeans <GrFormClose className="icon" />
								</div>
								<div className="item-color">Pictorial - Light Wash - Stretch</div>
								<div className="item-size">30W X 30L</div>
								<div className="item-price">$98.00</div>
								<div className="promo-badge">Buy 2+, Get 30% Off: Applied at Checkout</div>
								<button className="add-to-bag-button">Add to Bag</button>
							</div>
						</div>
						<div className="favorite-item">
							<div className="product-image">
								<div className="slide-ratio">
									<Link
										className="cell-image-link"
										href="/"
									>
										<Image
											src="https://lsco.scene7.com/is/image/lsco/005141716-dynamic1-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=534"
											alt="image-product"
											width={600}
											height={500}
										/>
									</Link>
									<button
										type="button"
										className="favorite-button"
									>
										<FaHeart className="icon" />
									</button>
								</div>
							</div>
							<div className="product-info">
								<div className="item-name">
									512™ Slim Taper Fit Mens Jeans <GrFormClose className="icon" />
								</div>
								<div className="item-color">Pictorial - Light Wash - Stretch</div>
								<div className="item-size">30W X 30L</div>
								<div className="item-price">$98.00</div>
								<div className="promo-badge">Buy 2+, Get 30% Off: Applied at Checkout</div>
								<button className="add-to-bag-button">Add to Bag</button>
							</div>
						</div>
						<div className="favorite-item">
							<div className="product-image">
								<div className="slide-ratio">
									<Link
										className="cell-image-link"
										href="/"
									>
										<Image
											src="https://lsco.scene7.com/is/image/lsco/005141716-dynamic1-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=534"
											alt="image-product"
											width={600}
											height={500}
										/>
									</Link>
									<button
										type="button"
										className="favorite-button"
									>
										<FaHeart className="icon" />
									</button>
								</div>
							</div>
							<div className="product-info">
								<div className="item-name">
									512™ Slim Taper Fit Mens Jeans <GrFormClose className="icon" />
								</div>
								<div className="item-color">Pictorial - Light Wash - Stretch</div>
								<div className="item-size">30W X 30L</div>
								<div className="item-price">$98.00</div>
								<div className="promo-badge">Buy 2+, Get 30% Off: Applied at Checkout</div>
								<button className="add-to-bag-button">Add to Bag</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PageFavorite;
