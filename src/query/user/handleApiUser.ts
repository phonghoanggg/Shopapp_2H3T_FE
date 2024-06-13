import { publicRequest } from '@/configs/AxiosConfig';
import { STALE_TIME, CACHE_TIME, RETRY } from '@/utils/breakpoints/constants';
import { API_ENDPOINT } from '@/utils/endpoint/api_endpoint';
import { useQuery } from 'react-query';

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
