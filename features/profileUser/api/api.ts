import { baseApi } from '@/app'
import { ProfileUserPostsResponse, ProfileUserResponse } from '@/features/profileUser/api/types'

export const profileUserApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    myProfile: builder.query<ProfileUserResponse, void>({
      providesTags: ['Profile', 'Post', 'Posts'],
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
      providesTags: ['Profile', 'Posts', 'Post'],
      query: id => ({
        method: 'GET',
        url: `profile/${id}`,
      }),
    }),
  }),
})

export const {
  useMyProfilePostsQuery,
  useMyProfileQuery,
  useProfileByIdPostsQuery,
  useProfileUserByIdQuery,
} = profileUserApi
