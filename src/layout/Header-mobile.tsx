'use client';
// components
import Logo from '@/compound/logo/Logo';
// icons
import { CgSearch, GrFormClose, HiOutlineMenuAlt4, HiOutlineShoppingBag, TbHeart } from '../compound/icons/index';
// base
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper';
// public json
import Saler from '../../public/saler.json';
// lodash
import { map } from 'lodash';
// contains
import { ROUTER } from '@/utils/routes/routes';
import { MENU_LIST } from './constants';

interface IPropsSaler {
	id: number;
	label: string;
}

const HeaderMobile = () => {
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

	const DataSaler = Saler.saler;
	return (
		<header className="site-header-mobile">
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
					<TbHeart size={22} />
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
					{map(DataSaler, (item: IPropsSaler) => (
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
							<Link href="/">Favorite</Link>
							<Link href="/">Login</Link>
							<Link href="/">Login</Link>
							<Link href="/">Sign Up</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderMobile;
