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
    getPostById: builder.query<Post, string>({
      query: id => `posts/${id}`,
    }),
  }),

  reducerPath: 'getPostApi',
})

export const { useGetPostByIdQuery } = getPostApi
