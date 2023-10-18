'use client';
// base
import Link from 'next/link';
import { useState } from 'react';
// components
import Contact from './Contact';
// lodash
import { map } from 'lodash';
// contains
import { FOOTER_LIST } from '../constants';
// icons
import { MdKeyboardArrowDown } from '../../compound/icons/index';

export const Footer = () => {
	const [activeH6, setActiveH6] = useState(null);

	const toggleCollapse = (label: any) => {
		if (activeH6 === label) {
			setActiveH6(null);
		} else {
			setActiveH6(label);
		}
	};

	return (
		<footer className="site-footer">
			<section className="footer-wrapper container">
				{/* contact footer */}
				<Contact />
				{/* navigation footer */}
				<ul className="menu-list">
					{map(FOOTER_LIST, ({ label, link }) => (
						<div
							className="item"
							key={`footer-${label}`}
						>
							<h6
								className="title"
								onClick={() => toggleCollapse(label)}
							>
								{label}
								<MdKeyboardArrowDown
									className="icon"
									size={24}
								/>
							</h6>
							{map(link, ({ pathname }) => (
								<div className={`link ${activeH6 === label ? '-show' : ''}`}>
									<Link
										key={`footer-link-${pathname}`}
										href="/"
									>
										{pathname}
									</Link>
								</div>
							))}
						</div>
					))}
				</ul>
			</section>
		</footer>
	);
};
