import { baseApi } from '@/app'

export const logoutApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    logout: builder.mutation({
      query: () => {
        return {
          credentials: 'include',
          headers: {
            'User-Agent': navigator.userAgent,
          },
          method: 'POST',
          url: 'auth/logout',
        }
      },
    }),
  }),
})

export const { useLogoutMutation } = logoutApi
