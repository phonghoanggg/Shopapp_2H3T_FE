'use client';
// base
import { useRouter } from 'next/navigation';
// components
import FormInput from '@/compound/formInput/FormInput';
// react-hook-form
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
// redux
import { selectInformationUserLoginEmail } from '@/redux/auth/selectors';
import { clearCart } from '@/redux/cart/slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ROUTER } from '@/utils/routes/routes';
// useQuery
import {
	useGetCommuneLocation,
	useGetDistrictLocation,
	useGetProvinceLocation,
} from '@/query/locations/handleApiLocation';
import { usePostOrder } from '@/query/order/handleOrder';
import { useState } from 'react';

interface IOderProps {
	name?: string;
	address?: string;
	province?: string;
	district?: string;
	commune?: string;
	phone?: number;
	note?: string;
}

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	address: yup.string().required('Address is required'),
	province: yup.string().required('Province is required'),
	district: yup.string().required('District is required'),
	commune: yup.string().required('Commune is required'),
	phone: yup
		.number()
		.typeError('Phone Number must be a number')
		.required('Phone Number is required')
		.test('len', 'Phone Number must be exactly 10 digits', (val: any) => val && val.toString().length === 9),
	note: yup.string(),
});

const OrderFormInformation = ({ itemBagCart, total }: any) => {
	const { mutate: MUTATION_ORDER, isLoading: LOADING_ORDER } = usePostOrder();
	const { data: DATA_PROVINCE } = useGetProvinceLocation();
	const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
	const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

	const [selectedProvinceName, setSelectedProvinceName] = useState<string | null>(null);
	const [selectedDistrictName, setSelectedDistrictName] = useState<string | null>(null);
	const [selectedCommuneName, setSelectedCommuneName] = useState<string | null>(null);

	const {
		data: DATA_DISTRICT,
		error: ERROR_DISTRICT,
		isLoading: LOADING_DISTRICT,
	} = useGetDistrictLocation(selectedProvince as string);
	const {
		data: DATA_COMMUNE,
		error: ERROR_COMMUNE,
		isLoading: LOADING_COMMUNE,
	} = useGetCommuneLocation(selectedDistrict as string);

	const inforUser = useAppSelector(selectInformationUserLoginEmail);
	const userId = inforUser?._id || null;
	const dispatch = useAppDispatch();
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: IOderProps) => {
		const isFormValid = await trigger();
		if (isFormValid) {
			const cartItems = itemBagCart.map((item: any) => ({
				productId: item.id,
				quantity: item.quantity,
				size: item.size,
			}));

			const orderData: any = {
				userId: userId,
				name: data.name,
				note: data.note,
				address: data.address,
				province: selectedProvinceName, // Include selected province
				district: selectedDistrictName, // Include selected district
				commune: selectedCommuneName, // Include selected commune
				phone: data.phone,
				cartItems: cartItems,
				total: total,
				status: 'pending',
			};

			MUTATION_ORDER(orderData, {
				onSuccess: async () => {
					await reset();
					await dispatch(clearCart());
					router.push(ROUTER.YOUR_ORDER);
				},
			});
		}
	};

	const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		const selectedProvince = DATA_PROVINCE.find((province: any) => province.idProvince === selectedValue);
		if (selectedProvince) {
			setSelectedProvinceName(selectedProvince.name);
		}
		setSelectedProvince(selectedValue);
	};
	const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		const selectedDistrict = DATA_DISTRICT.find((province: any) => province.idDistrict === selectedValue);
		if (selectedDistrict) {
			setSelectedDistrictName(selectedDistrict.name);
		}
		setSelectedDistrict(selectedValue);
	};

	const handleCommuneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		const selectedCommune = DATA_COMMUNE.find((province: any) => province.idCommune === selectedValue);
		console.log(selectedCommune);

		if (selectedCommune) {
			setSelectedCommuneName(selectedCommune.name);
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
					<div className="form-input">
						<label>Province*</label>
						<Controller
							name="province"
							control={control}
							render={({ field }) => (
								<select
									{...field}
									onChange={(e) => {
										field.onChange(e);
										handleProvinceChange(e);
									}}
								>
									<option value="">Select a province</option>
									{DATA_PROVINCE?.map((province: any) => (
										<option
											key={province.idProvince}
											value={province.idProvince}
										>
											{province.name}
										</option>
									))}
								</select>
							)}
						/>
						{errors.province && <p className="error-message">{errors.province.message}</p>}
					</div>
					<div className="form-input">
						<label>District*</label>
						<Controller
							name="district"
							control={control}
							render={({ field }) => (
								<select
									{...field}
									onChange={(e) => {
										field.onChange(e);
										handleDistrictChange(e);
									}}
								>
									<option value="">Select a district</option>
									{DATA_DISTRICT?.map((district: any) => (
										<option
											key={district.idDistrict}
											value={district.idDistrict}
										>
											{district.name}
										</option>
									))}
								</select>
							)}
						/>
						{errors.district && <p className="error-message">{errors.district.message}</p>}
					</div>
					<div className="form-input">
						<label>Commune*</label>
						<Controller
							name="commune"
							control={control}
							render={({ field }) => (
								<select
									{...field}
									onChange={(e) => {
										field.onChange(e);
										handleCommuneChange(e);
									}}
								>
									<option value="">Select a commune</option>
									{DATA_COMMUNE?.map((commune: any) => (
										<option
											key={commune.idCommune}
											value={commune.idCommune}
										>
											{commune.name}
										</option>
									))}
								</select>
							)}
						/>
						{errors.commune && <p className="error-message">{errors.commune.message}</p>}
					</div>
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
