'use client';
// base
import Link from 'next/link';
// components
import Logo from '@/compound/logo/Logo';
// icons
import { CgSearch, GrFormClose, HiOutlineMenuAlt4, HiOutlineShoppingBag, TbHeart } from '../../compound/icons/index';
// base
import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper';
// lodash
import { map } from 'lodash';
// redux
import { useAppDispatch } from '@/redux/hook';
import { openModalLogin, openModalRegister } from '@/redux/modal/slice';
// contains
import { ROUTER } from '@/utils/routes/routes';
import { MENU_LIST, SALE } from '../constants';

interface IPropsSaler {
	id: number;
	label: string;
}

const HeaderMobile = () => {
	const dispatch = useAppDispatch();

	const [openNav, setOpenNav] = useState<Boolean>(false);
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
			document.body.classList.add('disable-scroll');
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.body.classList.remove('disable-scroll');
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.body.classList.remove('disable-scroll');
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openNav]);

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
					<Link href={ROUTER.CART}>
						<HiOutlineShoppingBag
							color="#000"
							size={24}
						/>
					</Link>
					<Link href={ROUTER.FAVORITE}>
						<TbHeart
							size={22}
							color="#000"
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
							<div onClick={() => dispatch(openModalLogin())}>Login</div>
							<div onClick={() => dispatch(openModalRegister())}>Sign Up</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderMobile;
