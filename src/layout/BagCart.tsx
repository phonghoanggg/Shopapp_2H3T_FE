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
import { selectCartItems, selectIsOpenCartDrawer } from '@/redux/cart/selectors';
import { closeCart } from '@/redux/cart/slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ROUTER } from '@/utils/routes/routes';
import { Product } from '@/utils/type';
import { map } from 'lodash';

const BagCart = () => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectIsOpenCartDrawer);
	const itemBagCart = useAppSelector(selectCartItems);

	console.log(itemBagCart);
	// handle no scroll body when open bag cart
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (isOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}

			return () => {
				document.body.style.overflow = 'auto';
			};
		}
	}, [isOpen]);

	const calculateEstimatedTotal = () => {
		let total = 0;
		itemBagCart.forEach((item: any) => {
			total += item.discountPrice * item.quantity; // Tính toán subtotal của mỗi mục và cộng vào tổng
		});
		return total.toFixed(2); // Làm tròn tổng ước lượng đến hai chữ số sau dấu thập phân
	};

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
						20% off new Sons® subscribers.
						<div className="link">Sign Up</div>
					</div>
				</div>
				<div className="cart-inner ">
					<h4 className="title">Ship</h4>
					{/* list products cart */}
					<div className="cart-list">
						{/* item bag cart */}
						{map(itemBagCart, (item: Product) => (
							<div
								className="cart-item"
								key={item._id}
							>
								<Link
									href={`${ROUTER.PRODUCT_DETAIL}/${item._id}`}
									className="image"
								>
									{item.images && item.images.length > 0 && (
										<Image
											width={500}
											height={500}
											loading="lazy"
											src={item.images[0]}
											alt="product cart item"
										/>
									)}
								</Link>
								<div className="desc">
									<Link
										href={`${ROUTER.PRODUCT_DETAIL}/${item._id}`}
										className="name"
									>
										{item.name}
									</Link>
									<p className="sub-name">Wild Bunch - Medium Wash</p>
									<p className="price">
										{item.discountPrice.toFixed(2)}
										<del className="old-price">${item.price?.toFixed(2)}</del>
									</p>

									<div className="type-wrapper">
										<p className="size">{item.size}</p>
										<div className="quantity">Qty: {item.quantity || 1}</div>
									</div>
									<div className="sub-title">
										Subtotal:
										<span>${(item.discountPrice * item.quantity).toFixed(2)}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* total cart */}

			<div className="total-wrapper">
				<div className="total">
					<div className="title">Estimated Total</div>
					<p className="total-number">${calculateEstimatedTotal()}</p>
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
