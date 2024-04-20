'use client';
import { selectCartItems } from '@/redux/cart/selectors';
import { removeFromCart, updateCartItemQuantity } from '@/redux/cart/slice'; // Import updateCartItemQuantity
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ROUTER } from '@/utils/routes/routes';
import { map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, TbHeart } from '../../compound/icons/index';

const CartProductList = () => {
	const dispatch = useAppDispatch();
	const itemBagCart = useAppSelector(selectCartItems);
	// handle Quantity shopping cart
	const [showQuantity, setShowQuantity] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLUListElement>(null);

	const closeDropdown = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setShowQuantity(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', closeDropdown);
		return () => {
			document.removeEventListener('mousedown', closeDropdown);
		};
	}, []);

	const toggleDropdown = () => {
		setShowQuantity(!showQuantity);
	};

	const handleRemoveItem = (id: string, size: string) => {
		dispatch(removeFromCart({ id, size }));
	};

	const handleQuantityChange = (id: string, newQuantity: number) => {
		// Dispatch updateCartItemQuantity action
		dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
		setShowQuantity(false);
	};

	return (
		<div className="bag-cart-box">
			<div className="shopping-cart-title-box">
				<h4 className="title _text-uppercase">shopping cart</h4>
				<div className="qty">1 item</div>
			</div>
			<div className="shopping-cart-lists">
				<h4 className="title">Ship</h4>
				{map(itemBagCart, (item) => (
					<div
						className="shopping-cart-item _border-bottom"
						key={item.id}
					>
						<Link
							href={ROUTER.PRODUCT_DETAIL}
							className="image"
						>
							<Image
								width={500}
								height={500}
								src={item.images[0]}
								alt={`cart item ${item.id}`}
							/>
						</Link>
						<div className="shopping-cart-desc">
							<div className="item-infor">
								<p className="brand">SonTruong&#39;s® Premium</p>
								<Link
									className="name"
									href={ROUTER.PRODUCT_DETAIL}
								>
									{item.name}
								</Link>
								<p className="color">Luxor Heat Light Wash</p>
								<p className="price">${item.discountPrice}</p>
								<div className="infor">
									<div className="size">{item.size}</div>
									<button
										className="qty"
										type="button"
										onClick={toggleDropdown}
									>
										Qty: {item.quantity} <MdKeyboardArrowDown />
									</button>
									{showQuantity && (
										<ul
											className="dropdown-inner"
											ref={dropdownRef}
										>
											{[1, 2, 3, 4, 5, 6].map((value) => (
												<li
													className="item"
													key={value}
													onClick={() => handleQuantityChange(item.id, value)} // Call handleQuantityChange on click
												>
													{value}
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
							<div className="item-total">
								<div className="actions">
									<button type="button">
										<TbHeart size={16} /> Moveto Favorite
									</button>
									<button
										className="remove"
										type="button"
										onClick={() => handleRemoveItem(item.id, item.size)}
									>
										Remove
									</button>
								</div>
								<div className="total">
									Total:
									<span className="price">{(item.discountPrice * item.quantity).toFixed(2)}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CartProductList;
