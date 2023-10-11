// base
import Link from 'next/link';
// components
import Button from '@/compound/button/Button';
// contains
import { FOOTER_LIST } from './constains';
// lodash
import { map } from 'lodash';

// looix gi ne

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="footer-wrapper container">
				{/* contact footer */}
				<div className="contact">
					<div className="sale-box">
						<p className="sale">20% OFF + FREE SHIPPING</p>
						<p className="content">For All New SonTruong&#39;s® Email Subscribers.</p>
					</div>
					<div className="field-box">
						<div className="field">
							<label
								htmlFor="singUp"
								className="label"
							>
								Email*
							</label>
							<input
								className="input"
								type="text"
							/>
						</div>
						<Button
							color="primary"
							className="button _text-capitalize _text-center"
							type="button"
						>
							Sign Up
						</Button>
					</div>
				</div>
				{/* navigation footer */}
				<ul className="menu-list">
					{map(FOOTER_LIST, ({ label, link }) => (
						<li
							className="item"
							key={`footer-${label}`}
						>
							<h6 className="title">{label}</h6>
							{map(link, ({ pathname }) => (
								<Link
									key={`footer-link-${pathname}`}
									className="link"
									href="/"
								>
									{pathname}
								</Link>
							))}
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};
