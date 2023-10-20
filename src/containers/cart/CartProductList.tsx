'use client';
import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, TbHeart } from '../../compound/icons/index';

const CartProductList = () => {
	// handle Quantity shopping cart
	const [showQuantity, setShowQuantity] = useState<boolean>(false);
	const [qty, setQty] = useState(1);
	const dropdownRef = useRef<HTMLUListElement>(null);

	const selectQuantity = (selectedQty: number) => {
		setQty(selectedQty);
		setShowQuantity(false);
	};

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

	return (
		<div className="bag-cart-box">
			<div className="shopping-cart-title-box">
				<h4 className="title _text-uppercase">shopping cart</h4>
				<div className="qty">1 item</div>
			</div>
			<div className="shopping-cart-lists">
				<h4 className="title">Ship</h4>
				<div className="shopping-cart-item _border-bottom">
					<Link
						href={ROUTER.PRODUCT_DETAIL}
						className="image"
					>
						<Image
							width={500}
							height={500}
							src="https://lsco.scene7.com/is/image/lsco/563270086-dynamic1-pdp?fmt=avif&qlt=40&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=400&hei=534"
							alt=""
						/>
					</Link>
					<div className="shopping-cart-desc">
						<div className="item-infor">
							<p className="brand">SonTruong&#39;s® Premium</p>
							<Link
								className="name"
								href={ROUTER.PRODUCT_DETAIL}
							>
								501® High Rise Women&#39;s Shorts
							</Link>
							<p className="color">Luxor Heat Light Wash</p>
							<p className="price">$69.50</p>
							<div className="infor">
								<div className="size">M</div>
								<button
									className="qty"
									type="button"
									onClick={toggleDropdown}
								>
									Qty: {qty} <MdKeyboardArrowDown />
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
												onClick={() => selectQuantity(value)}
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
								>
									Remove
								</button>
							</div>
							<div className="total">
								Total: <span className="price">$69.50</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProductList;
