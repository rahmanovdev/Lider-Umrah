import { api as index } from ".."

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTours: build.query<any, void>({
			query: () => ({
				url: `${ENDPOINTS}/tour/packages`,
				method: "GET",
			}),
			providesTags: ["tours"],
		}),
	}),
})

export const { useGetToursQuery } = api
