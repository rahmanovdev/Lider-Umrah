// redux/api/hotels/index.ts
import { api as index } from '..';

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
	endpoints: build => ({
		getHotels: build.query<HOTEL.GetHotelsResponse, void>({
			query: () => ({
				url: `${ENDPOINTS}/tour/hotels/`, // слэш кошулду
				method: 'GET'
			}),
			providesTags: ['hotels']
		}),
		getHotelsByCity: build.query<HOTEL.IHotel[], string>({
			query: city => ({
				url: `${ENDPOINTS}/tour/hotels/?city=${city}`, // слэш кошулду
				method: 'GET'
			}),
			providesTags: ['hotels']
		})
	})
});

export const { useGetHotelsQuery, useGetHotelsByCityQuery } = api;
