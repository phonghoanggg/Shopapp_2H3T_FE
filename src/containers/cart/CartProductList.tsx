'use client';
import { selectCartItems } from '@/redux/cart/selectors';
import { removeFromCart, updateCartItemQuantity } from '@/redux/cart/slice';
import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowDown, TbHeart } from '../../compound/icons/index';

const CartProductList = () => {
	const dispatch = useDispatch();
	const itemBagCart = useSelector(selectCartItems);
	const dropdownRefs = useRef<Record<string, HTMLUListElement | null>>({});
	const [showDropdowns, setShowDropdowns] = useState<Record<string, boolean>>({});

	const handleRemoveItem = (id: string, size: string) => {
		dispatch(removeFromCart({ id, size }));
	};

	const openShowModalQuantity = (id: string, size: string) => {
		const newShowDropdowns = { ...showDropdowns, [`${id}-${size}`]: true };
		setShowDropdowns(newShowDropdowns);
	};

	const closeShowModalQuantity = (id: string, size: string) => {
		const newShowDropdowns = { ...showDropdowns, [`${id}-${size}`]: false };
		setShowDropdowns(newShowDropdowns);
	};

	const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
		dispatch(updateCartItemQuantity({ id, quantity: newQuantity, size }));
	};

	useEffect(() => {
		const closeDropdown = (event: MouseEvent) => {
			Object.keys(dropdownRefs.current).forEach((key) => {
				const ref = dropdownRefs.current[key];
				if (ref && !ref.contains(event.target as Node)) {
					const [itemId, size] = key.split('-');
					closeShowModalQuantity(itemId, size);
				}
			});
		};
		document.addEventListener('mousedown', closeDropdown);
		return () => {
			document.removeEventListener('mousedown', closeDropdown);
		};
	}, []);

	return (
		<div className="bag-cart-box">
			<div className="shopping-cart-title-box">
				<h4 className="title _text-uppercase">shopping cart</h4>
				<div className="qty">{itemBagCart.length || '?'} item</div>
			</div>
			<div className="shopping-cart-lists">
				<h4 className="title">Ship</h4>
				{itemBagCart.map((item: any) => (
					<div
						className="shopping-cart-item _border-bottom"
						key={item.id}
					>
						<Link
							href={`${ROUTER.PRODUCT_DETAIL}/${item.id}`}
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
								<p className="price">${item.discountPrice.toFixed(2)}</p>
								<div className="infor">
									<div className="size">{item.size}</div>
									<button
										className="qty"
										type="button"
										onClick={() => openShowModalQuantity(item.id, item.size)}
									>
										Qty: {item.quantity} <MdKeyboardArrowDown />
									</button>
									{showDropdowns[`${item.id}-${item.size}`] && (
										<ul
											className="dropdown-inner"
											ref={(ref) => {
												dropdownRefs.current[`${item.id}-${item.size}`] = ref;
											}}
										>
											{[1, 2, 3, 4, 5, 6].map((value) => (
												<li
													className="item"
													key={value}
													onClick={() => handleQuantityChange(item.id, item.size, value)}
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
									<span className="price">${(item.discountPrice * item.quantity).toFixed(2)}</span>
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
