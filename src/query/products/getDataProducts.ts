import { publicRequest } from '@/configs/AxiosConfig';
import { CACHE_TIME, RETRY, STALE_TIME } from '@/utils/breakpoints/constants';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { Product, ProductDetail } from '@/utils/type';
import { useQuery } from 'react-query';

export const useProductsQuery = () => {
	return useQuery(
		API_ENDPOINT.PRODUCTS,
		async (): Promise<Product> => {
			return await publicRequest.request({
				method: 'GET',
				url: API_ENDPOINT.PRODUCTS,
			});
		},
		{
			staleTime: STALE_TIME, // 5 minutes
			cacheTime: CACHE_TIME, // 10 minutes
			retry: RETRY, // Number of retry attempts in case of failure
			refetchOnWindowFocus: false,
		},
	);
};

export const useProductDetailQuery = (id: string) => {
	return useQuery(
		[API_ENDPOINT.PRODUCTDETAIL, id],
		async (): Promise<ProductDetail> => {
			return await publicRequest.request({
				method: 'GET',
				url: `${API_ENDPOINT.PRODUCTDETAIL}/${id}`,
			});
		},
		{
			staleTime: STALE_TIME, // 5 minutes
			cacheTime: CACHE_TIME, // 10 minutes
			retry: RETRY, // Number of retry attempts in case of failure
		},
	);
};
