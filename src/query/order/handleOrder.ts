import { publicRequest } from '@/configs/AxiosConfig';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { Order } from '@/utils/type';
import { useMutation, useQuery } from 'react-query';

export const usePostOrder = () => {
	return useMutation(API_ENDPOINT.ORDER, async (data): Promise<Order> => {
		return await publicRequest.request({
			method: 'POST',
			url: API_ENDPOINT.ORDER,
			data: data,
		});
	});
};

export const useDeleteOrder = () => {
	return useMutation(API_ENDPOINT.DELETE_ORDER, async (orderId: string): Promise<void> => {
		await publicRequest.request({
			method: 'DELETE',
			url: `${API_ENDPOINT.ORDER}/${orderId}`,
		});
	});
};

export const useGetAllOrder = () => {
	return useQuery(API_ENDPOINT.GET_ALL_ORDER, async (): Promise<Order> => {
		return await publicRequest.request({
			method: 'GET',
			url: API_ENDPOINT.ORDER,
		});
	});
};
