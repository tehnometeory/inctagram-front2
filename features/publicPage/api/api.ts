import { BASE_URL_API, Post } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const publicPageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: builder => ({
    fetchNewestPosts: builder.query<Post[], void>({
      query: () => 'posts/newest-posts',
    }),
  }),
  reducerPath: 'publicPageApi',
})

export const { useFetchNewestPostsQuery } = publicPageApi
