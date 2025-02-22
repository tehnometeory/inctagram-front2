import { ProfileUserPostsResponse, ProfileUserResponse } from '@/features/profileUser/api/types'
import { BASE_URL_API, RootState } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileUserApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-type', 'application/json; charset=utf-8')
      const state = getState() as RootState
      const token = state.auth.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: builder => ({
    myProfile: builder.query<ProfileUserResponse, void>({
      providesTags: ['Profile'],
      query: () => ({
        method: 'GET',
        url: 'profile/my-profile',
      }),
    }),
    myProfilePosts: builder.query<ProfileUserPostsResponse, number>({
      providesTags: ['Posts', 'Post'],
      query: page => ({
        method: 'GET',
        url: `posts/my-profile-posts?page=${page}`,
      }),
    }),
    profileByIdPosts: builder.query<ProfileUserPostsResponse, { id: string; page: number }>({
      providesTags: ['Posts', 'Post'],
      query: ({ id, page }) => ({
        method: 'GET',
        url: `posts/profile-posts/${id}?page=${page}`,
      }),
    }),

    profileUserById: builder.query<ProfileUserResponse, string>({
      providesTags: ['Profile'],
      query: id => ({
        method: 'GET',
        url: `profile/${id}`,
      }),
    }),
  }),
  reducerPath: 'profileUserApi',
  tagTypes: ['Profile', 'Posts', 'Post'],
})

export const {
  useMyProfilePostsQuery,
  useMyProfileQuery,
  useProfileByIdPostsQuery,
  useProfileUserByIdQuery,
} = profileUserApi
