import Button from '@/compound/demo-button/button/Button';
import { GrFormClose } from '../../compound/icons/index';

const Register = () => {
	return (
		<section className="login-wrapper _overlay">
			<div className="login-inner">
				<GrFormClose className="icon" />
				{/* description */}
				<div className="desc _text-center">
					<h4 className="title _text-uppercase">
						<span>SonTruong&#39;s</span>REDTAB™
					</h4>
					<p className="content">JOIN OUR RED TAB™ PROGRAM AND GET FREE SHIPPING ON EVERY ORDER.</p>
					<p className="description ">
						Sign up for Levi&#39;s® Red Tab™ to get exclusive access to products, events, and offers. Just
						provide a few details. It&#39;s free to join and open to all.
					</p>
				</div>
				{/* form login */}
				<form className="form-register-inner">
					<div className="field">
						<label
							className="label"
							htmlFor="firstName"
						>
							First Name*
						</label>
						<input
							className="input"
							type="text"
							id="firstName"
						/>
					</div>
					<div className="field">
						<label
							htmlFor="lastName"
							className="label"
						>
							Last Name*
						</label>
						<input
							className="input"
							type="text"
							id="lastName"
						/>
					</div>
					<div className="field">
						<label
							htmlFor="email"
							className="label"
						>
							Email*
						</label>
						<input
							className="input"
							type="text"
							id="email"
						/>
					</div>
					<div className="field">
						<label
							htmlFor="password"
							className="label"
						>
							Password*
						</label>
						<input
							className="input"
							type="password"
							id="password"
						/>
						<p className="alert">
							Passwords must be at least 8 characters and can&#39;t be easy to guess - commonly used or
							risky passwords are not permitted.
						</p>
					</div>
					<div className="notice">
						By creating an account, I agree to the <span>LS&Co. Terms of Use</span> and the
						<span>Red Tab Member Program Terms and Conditions.</span> I have read the LS&Co. Privacy Policy
						and <span>Financial Incentive Notice and offer terms.</span>
					</div>
					<Button className="btn-submit">Join</Button>
					<button
						className="btn-open-modal"
						type="button"
					>
						Log in with an existing account
					</button>
				</form>
			</div>
		</section>
	);
};

export default Register;
