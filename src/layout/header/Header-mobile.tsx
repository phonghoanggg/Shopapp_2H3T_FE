'use client';
// base
import Link from 'next/link';
// components
import Logo from '@/compound/logo/Logo';
// icons
import { CgSearch, GrFormClose, HiOutlineMenuAlt4, HiOutlineShoppingBag, VscBell } from '../../compound/icons/index';
// base
import { useEffect, useRef, useState } from 'react';
// Import Swiper
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// lodash
import { map } from 'lodash';
// redux
import { selectInformationUserLoginEmail } from '@/redux/auth/selectors';
import { logoutGoogle } from '@/redux/auth/slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { openModalLogin, openModalRegister, openModalSale } from '@/redux/modal/slice';
// contains
import { ROUTER } from '@/utils/routes/routes';
import { MENU_LIST, SALE } from '../constants';
// custom-hook
import useNoScrollBody from '@/custom-hook/useNoScrollBody';

interface IPropsSaler {
	id: number;
	label: string;
}

const HeaderMobile = () => {
	const dispatch = useAppDispatch();

	const [openNav, setOpenNav] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const handleOpenNav = () => {
		setOpenNav(true);
	};
	const handleCloseNav = () => {
		setOpenNav(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
			handleCloseNav();
		}
	};

	useEffect(() => {
		if (openNav) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openNav]);
	// handle hidden scroll body

	useNoScrollBody(openNav);
	const inforUser = useAppSelector(selectInformationUserLoginEmail);
	const handleLogOutGoogle = () => dispatch(logoutGoogle());

	return (
		<header className={`site-header-mobile `}>
			<div className="header-mobile-inner container">
				<div className="menu-icon">
					<HiOutlineMenuAlt4
						size={22}
						onClick={handleOpenNav}
					/>
				</div>
				<Logo />
				<div className="actions">
					<CgSearch size={22} />
					<VscBell
						onClick={() => dispatch(openModalSale())}
						size={22}
						color="#000"
					/>
					<Link href={ROUTER.CART}>
						<HiOutlineShoppingBag
							color="#000"
							size={24}
						/>
					</Link>
				</div>
			</div>
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
					{map(SALE, (item: IPropsSaler) => (
						<SwiperSlide key={item.id}>
							<h6 className="top-menu-slide">
								{item.label} <span>details</span>
							</h6>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={`nav-mobile _overlay ${openNav ? 'show-nav' : 'hidden-nav'}`}>
				<div
					ref={wrapperRef}
					className={`wrapper-mobile  ${openNav ? 'show-nav' : 'hidden-nav'}`}
				>
					<div className="top">
						<Logo />
						<GrFormClose
							size={28}
							onClick={handleCloseNav}
						/>
					</div>
					<ul className="main-menu-mobile _text-uppercase ">
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
					<div className="action_wrapper _text-capitalize _border-top">
						<div className="action_list">
							<Link href={ROUTER.FAVORITE}>Favorite</Link>
							{inforUser ? (
								// If user is logged in
								<>
									<span className="action">Hello, {inforUser.displayName}</span>
									<button
										type="button"
										className="action"
										onClick={handleLogOutGoogle}
									>
										Logout
									</button>
								</>
							) : (
								// If user is not logged in
								<>
									<button
										type="button"
										className="action"
										onClick={() => dispatch(openModalLogin())}
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
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderMobile;
