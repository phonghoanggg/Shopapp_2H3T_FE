import { publicRequest } from '@/configs/AxiosConfig';
import { CACHE_TIME, RETRY, STALE_TIME } from '@/utils/breakpoints/constants';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { UseMutationOptions, useMutation, useQuery } from 'react-query';
export const useUserDetailQuery = (id: string) => {
	return useQuery(
		[API_ENDPOINT.GET_USER, id],
		async (): Promise<any> => {
			return await publicRequest.request({
				method: 'GET',
				url: `${API_ENDPOINT.GET_USER}/${id}`,
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
interface PutInfoUserParams {
	id?: string;
	data?: any;
}
export const usePutInfoUser = (options?: UseMutationOptions<any, unknown, PutInfoUserParams>) => {
	return useMutation(
		async ({ id, data }: PutInfoUserParams): Promise<any> => {
			if (!id || !data) {
				throw new Error('ID and data must be provided');
			}

			return await publicRequest.request({
				method: 'PUT',
				url: `${API_ENDPOINT.GET_USER}/${id}`,
				data: data,
			});
		},
		{
			retry: RETRY, // Number of retry attempts in case of failure
			...options,
		},
	);
};
