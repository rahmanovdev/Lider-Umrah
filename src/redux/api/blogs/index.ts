import { api as index } from '..';

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
	endpoints: build => ({
		getBlogs: build.query<BLOG.GetBlogsResponse, void>({
			query: () => ({
				url: `${ENDPOINTS}/blog/blogs/`,
				method: 'GET'
			}),
			providesTags: ['blogs']
		}),

		getBlogById: build.query<BLOG.Blog, number>({
			query: id => ({
				url: `${ENDPOINTS}/blog/blogs/${id}/`,
				method: 'GET'
			}),
			providesTags: ['blogs']
		})
	})
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = api;
