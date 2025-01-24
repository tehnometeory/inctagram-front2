import { BASE_URL_API, RootState } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-type', 'application/json; charset=utf-8')
      const state = getState() as RootState
      const token = state.auth.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      headers.set('User-Agent', navigator.userAgent)

      return headers
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: [],
})
