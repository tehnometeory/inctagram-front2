import { baseApi } from '@/app'

import { GetPosts, PostResponse, Publish } from './types'

export const publishPostApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNewestPosts: builder.query<PostResponse<Publish>, void>({
      query: () => 'posts/newest-posts',
    }),
    publishPost: builder.mutation<PostResponse<GetPosts>, FormData>({
      query: post => {
        return {
          body: post,
          method: 'POST',
          url: 'posts',
        }
      },
    }),
  }),
})

export const { useGetNewestPostsQuery, usePublishPostMutation } = publishPostApi
