import { baseApi } from '@/app'

import { Post } from '../model/types'

export const getPostApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deletePostById: builder.mutation<void, string>({
      invalidatesTags: ['Post'],
      query: id => ({
        method: 'DELETE',
        url: `posts/${id}`,
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: id => `posts/${id}`,
    }),
    sentNewDescription: builder.mutation<
      any,
      { description?: string; id?: string }
    >({
      query: ({ description, id }) => {
        return {
          body: { description },
          method: 'PUT',
          url: `posts/${id}`,
        }
      },
    }),
  }),
})

export const { useDeletePostByIdMutation, useGetPostByIdQuery, useSentNewDescriptionMutation } = getPostApi
