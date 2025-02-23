import { baseApi } from '@/app'

import { Post } from '../model/types'

export const getPostApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPostById: builder.query<Post, string>({
      query: id => `posts/${id}`,
    }),
  }),
})

export const { useGetPostByIdQuery } = getPostApi
