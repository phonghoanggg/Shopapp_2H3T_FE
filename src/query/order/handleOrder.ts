import { publicRequest } from '@/configs/AxiosConfig';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { useMutation } from 'react-query';

export const usePostOrder = () => {
	return useMutation(API_ENDPOINT.ORDER, async (data): Promise<any> => {
		return await publicRequest.request({
			method: 'POST',
			url: API_ENDPOINT.ORDER,
			data: data,
		});
	});
};
