'use client';
// base
import { useRouter } from 'next/navigation';
// components
import FormInput from '@/compound/formInput/FormInput';
// react-hook-form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// redux
import { selectInformationUserLoginEmail } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
// useQuery
import { usePostOrder } from '@/query/order/handleOrder';
import { clearCart } from '@/redux/cart/slice';
import { ROUTER } from '@/utils/routes/routes';

interface IOderProps {
	name?: string;
	address?: string;
	phone?: number;
	note?: string;
}
const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	address: yup.string().required('Address is required'),
	phone: yup
		.number()
		.typeError('Phone Number must be a number')
		.required('Phone Number is required')
		.test('len', 'Phone Number must be exactly 10 digits', (val: any) => val && val.toString().length === 9),
	note: yup.string(),
});

const OrderFormInformation = ({ itemBagCart, total }: any) => {
	const { mutate: MUTATION_ORDER, isLoading: LOADING_ORDER } = usePostOrder();
	// Fetch user information and set userId
	const inforUser = useAppSelector(selectInformationUserLoginEmail);
	const userId = inforUser?._id || null;
	const dispatch = useAppDispatch();
	const router = useRouter();
	// Initialize React Hook Form
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	// Handle form submission
	const onSubmit = async (data: IOderProps) => {
		// Trigger form validation
		const isFormValid = await trigger();
		if (isFormValid) {
			// Map cart items to required format
			const cartItems = itemBagCart.map((item: any) => ({
				productId: item.id,
				quantity: item.quantity,
			}));
			// Construct order data
			const orderData: any = {
				userId: userId,
				name: data.name,
				note: data.note,
				address: data.address,
				phone: data.phone,
				cartItems: cartItems,
				total: total,
				status: 'pending',
			};
			// Perform order mutation with onSuccess callback
			MUTATION_ORDER(orderData, {
				onSuccess: async () => {
					// Clear cart and reset form on successful order
					await reset();
					await dispatch(clearCart());
					// navigation to your order
					router.push(ROUTER.YOUR_ORDER);
				},
			});
		}
	};

	return (
		<div className="order-information-inner">
			{LOADING_ORDER && (
				<div className="site-loading">
					<div className="chaotic-orbit"></div>
				</div>
			)}
			<h3 className="title">SECURE CHECKOUT</h3>
			<form
				className="order-form-wrapper"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="order-form-box">
					<h3 className="items-title">Shipping Address</h3>
					<FormInput
						name="name"
						label="Name*"
						control={control}
						rules={schema.fields.name}
						errors={errors}
					/>
					<FormInput
						name="address"
						label="Address*"
						control={control}
						rules={schema.fields.address}
						errors={errors}
					/>
					<FormInput
						name="phone"
						label="Phone Number*"
						control={control}
						rules={schema.fields.phone}
						type="number"
						errors={errors}
					/>
					<FormInput
						name="note"
						label="Note for shipper"
						control={control}
						rules={schema.fields.note}
						errors={errors}
					/>
				</div>
				<button
					className="button"
					type="submit"
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default OrderFormInformation;
