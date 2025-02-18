import { BASE_URL_API } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { NewestPostsResponse, UsersCountResponse } from './types'

export const publicPageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: builder => ({
    fetchNewestPosts: builder.query<NewestPostsResponse, void>({
      query: () => 'posts/newest-posts',
    }),
    fetchUsersCount: builder.query<UsersCountResponse, void>({
      query: () => 'users/count',
    }),
  }),
  reducerPath: 'publicPageApi',
})

export const { useFetchNewestPostsQuery, useFetchUsersCountQuery } = publicPageApi
