import { publicRequest } from '@/configs/AxiosConfig';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { useQuery } from 'react-query';

export const useProductQuery = () => {
	return useQuery(API_ENDPOINT.PRODUCTS, async (): Promise<any> => {
		return await publicRequest.request({
			method: 'GET',
			url: API_ENDPOINT.PRODUCTS,
		});
	});
};
