import { baseApi } from '@/app'

import { LoginBody, SignInResponse } from './types'

export const signInApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<SignInResponse, LoginBody>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
  }),
})

export const { useLoginMutation } = signInApi
