import { ProfileUserResponse } from '@/features/profileUser/api/types'
import { BASE_URL_API } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileUserApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    prepareHeaders: headers => {
      headers.set('Content-type', 'application/json; charset=utf-8')
    },
  }),
  endpoints: builder => ({
    myProfile: builder.query<ProfileUserResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'profile/my-profile',
      }),
    }),
  }),
  reducerPath: 'profileUserApi',
})

export const { useMyProfileQuery } = profileUserApi
