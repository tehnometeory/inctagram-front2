import { BASE_URL_API } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetPosts, PostResponse, Publish } from './types'

export const publishPostApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      headers.set('User-Agent', navigator.userAgent)

      const state: any = getState()
      const token = state.auth?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: builder => ({
    getNewestPosts: builder.query<PostResponse<Publish>, void>({
      providesTags: ['Post'],
      query: () => 'posts/newest-posts',
    }),
    publishPost: builder.mutation<PostResponse<GetPosts>, FormData>({
      invalidatesTags: ['Post'],
      query: post => {
        return {
          body: post,
          method: 'POST',
          url: 'posts',
        }
      },
    }),
  }),
  reducerPath: 'publishPostApi',
  tagTypes: ['Post'],
})

export const { useGetNewestPostsQuery, usePublishPostMutation } = publishPostApi
