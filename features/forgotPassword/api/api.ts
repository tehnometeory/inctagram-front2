import { baseApi } from '@/app'

import { ResetPasswordArgs, ResetPasswordResponse } from './types'

export const forgotPasswordApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordArgs>({
      query: ({ email, recaptchaValue }) => ({
        body: { email, recaptchaValue },
        method: 'POST',
        url: 'auth/reset-password',
      }),
    }),
  }),
})

export const { useResetPasswordMutation } = forgotPasswordApi
