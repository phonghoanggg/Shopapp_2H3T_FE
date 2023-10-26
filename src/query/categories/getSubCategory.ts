import { publicRequest } from '@/configs/AxiosConfig';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { useQuery } from 'react-query';

export const useSubCategoriesQuery = () => {
	return useQuery(API_ENDPOINT.SUB_CATEGORIES, async (): Promise<any> => {
		return await publicRequest.request({
			method: 'GET',
			url: API_ENDPOINT.SUB_CATEGORIES,
		});
	});
};
