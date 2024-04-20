import { publicRequest } from '@/configs/AxiosConfig';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { Product } from '@/utils/type';
import { useQuery } from 'react-query';

export const useProductsQuery = () => {
	return useQuery(API_ENDPOINT.PRODUCTS, async (): Promise<Product> => {
		return await publicRequest.request({
			method: 'GET',
			url: API_ENDPOINT.PRODUCTS,
		});
	});
};

export const useProductDetailQuery = (id: string) => {
	return useQuery([API_ENDPOINT.PRODUCTDETAIL, id], async (): Promise<any> => {
		return await publicRequest.request({
			method: 'GET',
			url: `${API_ENDPOINT.PRODUCTDETAIL}/${id}`,
		});
	});
};
