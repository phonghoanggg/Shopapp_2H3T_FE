import { publicRequest } from '@/configs/AxiosConfig';
import { useAppDispatch } from '@/redux/hook';
import { openModalLogin } from '@/redux/modal/slice';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { useMutation } from 'react-query';

export const useLoginMutation = () => {
	return useMutation(
		API_ENDPOINT.LOGIN,
		async (data): Promise<any> => {
			return await publicRequest.request({
				method: 'POST',
				url: API_ENDPOINT.LOGIN,
				data: data,
			});
		},
		{
			onSuccess: (data) => {
				console.log('Login successful!', data);
			},
			onError: (error: Error) => {
				console.error('Login error:', error);
			},
		},
	);
};
export const useRegisterMutation = () => {
	const dispatch = useAppDispatch();

	const handleSuccessOpenModalLogin = () => {
		dispatch(openModalLogin());
	};

	return useMutation(
		API_ENDPOINT.REGISTER,
		async (data): Promise<any> => {
			return await publicRequest.request({
				method: 'POST',
				url: API_ENDPOINT.REGISTER,
				data: data,
			});
		},
		{
			onSuccess: handleSuccessOpenModalLogin,
			onError: (error: Error) => {
				console.error('Register error:', error);
			},
		},
	);
};
