import { baseApi } from '@/app'

import { Post } from '../model/types'

export const getPostApi = baseApi.injectEndpoints({
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
