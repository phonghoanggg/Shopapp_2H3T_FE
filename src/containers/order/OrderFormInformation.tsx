'use client';
import FormInput from '@/compound/formInput/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
		.test('len', 'Phone Number must be exactly 10 digits', (val: any) => val.length === 9)
		.required('Phone Number is required'),
	note: yup.string(),
});

const OrderFormInformation = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: IOderProps) => {
		const isFormValid = await trigger();
		if (isFormValid) {
			console.log(data);
		}
	};

	return (
		<div className="order-information-inner">
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
