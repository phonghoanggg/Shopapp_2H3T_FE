'use client';
// base
import Link from 'next/link';
import { Fragment } from 'react';
//  Swiper
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// public json
import Saler from '../../../public/saler.json';
// lodash
import { map } from 'lodash';
// components
import Logo from '@/compound/logo/Logo';
import BagCart from '../BagCart';
import HeaderMobile from './Header-mobile';
//  icons
import { CgSearch, HiOutlineShoppingBag, IoLocationSharp, TbHeart, VscBell } from '../../compound/icons/index';
// redux
import { openCart } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hook';
import { openModalRegister } from '@/redux/modal/slice';
// contains
import Register from '@/modals/register/Register';
import { ROUTER } from '@/utils/routes/routes';
import { MENU_LIST } from '../constants';

interface IPropsSaler {
	id: number;
	label: string;
}

export const Header = () => {
	const dispatch = useAppDispatch();

	const DataSaler = Saler.saler;

	return (
		<Fragment>
			{/* modal */}
			<Register />
			{/* header mobile */}
			<HeaderMobile />
			{/* header desktop */}
			<header className="site-header ">
				<div className="top-menu-wrapper">
					<div className="top-menu container">
						<div />
						<div className="slides">
							<Swiper
								navigation={true}
								loop
								autoplay={{
									delay: 3500,
									disableOnInteraction: false,
								}}
								modules={[Navigation, Autoplay]}
							>
								{map(DataSaler, (item: IPropsSaler) => (
									<SwiperSlide key={item.id}>
										<h6 className="top-menu-slide">
											{item.label} <span>details</span>
										</h6>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="actions">
							<button
								type="button"
								className="action"
							>
								Login
							</button>
							<button
								type="button"
								className="action"
								onClick={() => dispatch(openModalRegister())}
							>
								SignUp
							</button>
							<div className="action -location">
								<IoLocationSharp />
								VietNam
							</div>
						</div>
					</div>
				</div>
				{/* NavBar */}
				<div className="main-menu container">
					<div className="nav">
						<div className="wrapper">
							<Logo />
							<ul className="main-menu-list">
								{map(MENU_LIST, ({ label, route }) => (
									<li
										className="item"
										key={label}
									>
										<Link
											title={label}
											className="link"
											href={route}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="search-site">
						<div className="field">
							<CgSearch size={20} />
							<input
								type="text"
								placeholder="What are you looking for ?"
							/>
						</div>
						<div className="icons">
							<button
								type="button"
								className="header-icon-item"
							>
								<VscBell size={24} />
							</button>
							<Link
								href={ROUTER.FAVORITE}
								type="button"
								className="header-icon-item"
							>
								<TbHeart
									size={24}
									color="#000"
								/>
							</Link>

							<Link
								href={ROUTER.CART}
								className="header-icon-item "
								id="shopping-bag-anchor"
								onMouseEnter={() => dispatch(openCart())}
							>
								<HiOutlineShoppingBag
									color="#000"
									size={24}
								/>
							</Link>
						</div>
					</div>
				</div>
			</header>
			<BagCart />
		</Fragment>
	);
};
