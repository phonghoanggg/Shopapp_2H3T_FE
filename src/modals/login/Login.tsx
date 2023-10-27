'use client';

// base
import { useEffect, useRef } from 'react';
// components
import Button from '@/compound/demo-button/button/Button';
import FormInput from '@/compound/formInput/FormInput';
// icons
import { GrFormClose } from '../../compound/icons/index';
// redux
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectIsToggleModalLogin } from '@/redux/modal/selector';
import { closeModalLogin, openModalRegister } from '@/redux/modal/slice';
// custom-hook
import useNoScrollBody from '@/custom-hook/useNoScrollBody';

// react-hook-form
import { useForm } from 'react-hook-form';
// Yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object().shape({
	email: yup.string().email('Invalid email format').required('Email is required'),
	password: yup.string().required('Password is required'),
});

interface ILoginProps {
	email?: string;
	password?: string;
}
const Login = () => {
	// redux
	const isOpenToggleModalLogin = useAppSelector(selectIsToggleModalLogin);
	const dispatch = useAppDispatch();
	const loginInnerRef = useRef<HTMLDivElement | null>(null);

	// handle click out side
	const closeModalIfOutsideClick = (event: MouseEvent) => {
		if (loginInnerRef.current && !loginInnerRef.current.contains(event.target as Node)) {
			closeModal();
		}
	};

	useEffect(() => {
		if (isOpenToggleModalLogin) {
			document.addEventListener('click', closeModalIfOutsideClick);
		} else {
			document.removeEventListener('click', closeModalIfOutsideClick);
		}

		return () => {
			document.removeEventListener('click', closeModalIfOutsideClick);
		};
	}, [isOpenToggleModalLogin]);
	// handle hidden scroll body
	useNoScrollBody(isOpenToggleModalLogin);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const closeModal = () => {
		dispatch(closeModalLogin());
	};
	const handleOpenModalRegister = async () => {
		await dispatch(closeModalLogin());
		dispatch(openModalRegister());
	};
	const onSubmit = (data: ILoginProps) => {
		// Handle form submission here
		console.log(data);
	};
	return (
		<section className={`login-wrapper _overlay ${isOpenToggleModalLogin ? '-show' : ''}`}>
			{/* description */}
			<div
				className="login-inner _custom-scrollbar"
				ref={loginInnerRef}
			>
				<GrFormClose
					className="icon"
					onClick={closeModal}
				/>
				<div className="desc _text-center">
					<h4 className="title _text-uppercase">
						<span>SonTruong&#39;s</span>REDTAB™
					</h4>
					<p className="content">Welcome back!</p>
					<p className="description ">Log in for faster checkout and see all your benefits.</p>
				</div>
				{/* form login */}
				<form
					className="form-login-inner"
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormInput
						name="email"
						label="Email*"
						control={control}
						type="text"
						errors={errors}
					/>
					<FormInput
						name="password"
						label="Password*"
						control={control}
						type="password"
						errors={errors}
					/>

					<Button
						type="submit"
						className="btn-submit"
					>
						Log In
					</Button>
					<button
						className="btn-open-modal"
						type="button"
						onClick={handleOpenModalRegister}
					>
						Create a new account
					</button>
				</form>
				{/* login with google */}
				<div className="separator">
					<div className="text">OR</div>
				</div>
				<Button
					type="submit"
					className="btn-login-google"
				>
					Log In With Google
				</Button>
				<div className="notice">
					By creating an account, I agree to the <span>LS&Co. Terms of Use</span> and the
					<span> Terms and Conditions.</span> LS&Co. <span>Privacy Policy and</span>
				</div>
			</div>
		</section>
	);
};

export default Login;
