import Button from '@/compound/button/Button';

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="footer-wrapper container">
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
			</div>
		</footer>
	);
};
