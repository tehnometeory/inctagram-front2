import { BASE_URL_API } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Post } from '../model/types'

export const getPostApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.accessToken

      headers.set('User-Agent', navigator.userAgent)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: builder => ({
    deletePostById: builder.mutation<void, string>({
      invalidatesTags: ['Post', 'Profile'],
      query: id => ({
        method: 'DELETE',
        url: `posts/${id}`,
      }),
    }),
    getPostById: builder.query<Post, string>({
      providesTags: ['Post'],
      query: id => `posts/${id}`,
    }),
  }),
  reducerPath: 'getPostApi',

  tagTypes: ['Post', 'Profile'],
})

export const { useDeletePostByIdMutation, useGetPostByIdQuery } = getPostApi
