'use client';
// base
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
// components
import Button from '@/compound/demo-button/button/Button';
// icon
import { GiFireworkRocket, HiOutlineShoppingBag } from '../compound/icons/index';
// redux
import { selectIsOpenCartDrawer } from '@/redux/cart/selectors';
import { closeCart } from '@/redux/cart/slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ROUTER } from '@/utils/routes/routes';

const BagCart = () => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectIsOpenCartDrawer);
	// handle no scroll body when open bag cart
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<section
			className={`site-bag-cart ${isOpen ? '-show' : ''}`}
			onMouseLeave={() => dispatch(closeCart())}
		>
			<div className="bag-cart-wrapper">
				{/* top cart */}
				<div className="title-box">
					<h4 className="title _text-uppercase">
						your bag
						<Link
							className="icon"
							href={ROUTER.CART}
						>
							<HiOutlineShoppingBag
								color="#000"
								size={24}
							/>
						</Link>
					</h4>
					<div className="sub-title ">
						<GiFireworkRocket />
						20% off new Son&#39;s® subscribers.
						<div className="link">Sign Up</div>
					</div>
				</div>
				<div className="cart-inner ">
					<h4 className="title">Ship</h4>
					{/* list products cart */}
					<div className="cart-list">
						{/* item bag cart */}
						<div className="cart-item">
							<Link
								href="/"
								className="image"
							>
								<Image
									width={500}
									height={500}
									loading="lazy"
									src="https://lsco.scene7.com/is/image/lsco/D75910003-alt1-pdp-lse?$grid_desktop_full$"
									alt="product cart item"
								/>
							</Link>
							<Link
								href={ROUTER.PRODUCT_DETAIL}
								className="desc"
							>
								<p className="name">Wedgie Icon Fit Ankle Women&#39;s Jeans</p>
								<p className="sub-name">Wild Bunch - Medium Wash</p>

								<p className="price">
									$79.45 <del className="old-price">89.15</del>
								</p>
								<div className="type-wrapper">
									<p className="size">M</p>
									<div className="quantity">Qty: 1</div>
								</div>
								<div className="sub-title">
									Subtotal: <span>$79.45</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* total cart */}
			<div className="total-wrapper">
				<div className="total">
					<div className="title">Estimated Total</div>
					<p className="total-number">$129.53</p>
				</div>
				<Link
					href={ROUTER.CART}
					className="button"
				>
					<Button className="item">Checkout</Button>
				</Link>
			</div>
		</section>
	);
};

export default BagCart;
