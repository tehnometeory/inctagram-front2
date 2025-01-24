import { baseApi } from '@/app'

export const logoutApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    logout: builder.mutation({
      query: () => {
        return {
          method: 'POST',
          url: 'auth/logout',
        }
      },
    }),
  }),
})

export const { useLogoutMutation } = logoutApi
