import Button from '@/compound/button/Button';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="footer-wrapper container">
				{/* contact footer */}
				<div className="contact">
					<p className="sale">20% OFF + FREE SHIPPING</p>
					<p className="content">For All New SonTruong&#39;s® Email Subscribers.</p>
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
				{/* navigation footer */}
				<ul className="menu-list">
					<li className="item">
						<h6 className="title">Special Discounts</h6>
						<Link
							className="link"
							href="#"
						>
							Teacher Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Military Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Medical & First Responder
						</Link>
						<Link
							className="link"
							href="#"
						>
							Student Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Red Tab™ Member Program
						</Link>
					</li>
					<li className="item">
						<h6 className="title">Support</h6>
						<Link
							className="link"
							href="#"
						>
							Help
						</Link>
						<Link
							className="link"
							href="#"
						>
							Returns & Exchanges
						</Link>
						<Link
							className="link"
							href="#"
						>
							Shipping
						</Link>
						<Link
							className="link"
							href="#"
						>
							Payments Accepted
						</Link>
						<Link
							className="link"
							href="#"
						>
							Track Order
						</Link>
					</li>
					<li className="item">
						<h6 className="title">Company</h6>
						<Link
							className="link"
							href="#"
						>
							Teacher Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Military Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Medical & First Responder
						</Link>
						<Link
							className="link"
							href="#"
						>
							Student Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Red Tab™ Member Program
						</Link>
					</li>
					<li className="item">
						<h6 className="title">Store</h6>
						<Link
							className="link"
							href="#"
						>
							Teacher Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Military Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Medical & First Responder
						</Link>
						<Link
							className="link"
							href="#"
						>
							Student Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Red Tab™ Member Program
						</Link>
					</li>
					<li className="item">
						<h6 className="title">Our Brand</h6>
						<Link
							className="link"
							href="#"
						>
							Teacher Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Military Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Medical & First Responder
						</Link>
						<Link
							className="link"
							href="#"
						>
							Student Discount
						</Link>
						<Link
							className="link"
							href="#"
						>
							Red Tab™ Member Program
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
