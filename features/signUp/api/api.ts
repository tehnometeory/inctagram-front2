import { baseApi } from '@/app'

import { RegistrationBody, RegistrationResponse } from './types'

export const signUpApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    registration: builder.mutation<RegistrationResponse, RegistrationBody>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration',
      }),
    }),
  }),
})

export const { useRegistrationMutation } = signUpApi
