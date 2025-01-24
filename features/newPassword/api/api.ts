import { baseApi } from '@/app'

import { SetPasswordArg, SetPasswordResponse } from './types'

export const setPasswordApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    setPassword: builder.mutation<SetPasswordResponse, SetPasswordArg>({
      query: body => {
        return {
          body,
          method: 'POST',
          url: 'auth/set-password',
        }
      },
    }),
  }),
})

export const { useSetPasswordMutation } = setPasswordApi
