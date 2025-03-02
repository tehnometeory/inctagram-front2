import { baseApi } from '@/app'
import { ResponseWithAccessToken } from '@/shared'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    refreshTokens: builder.mutation<ResponseWithAccessToken, void>({
      query: () => ({
        headers: {
          'User-Agent': navigator.userAgent,
        },
        method: 'POST',
        url: 'auth/refresh-tokens',
      }),
    }),
  }),
})

export const { useRefreshTokensMutation } = authApi
