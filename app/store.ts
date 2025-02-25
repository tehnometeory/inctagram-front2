import { appReducer, authReducer } from '@/entities'
import { createPostReducer, selectedPostReducer } from '@/features'
import { rtkQueryErrorLogger } from '@/shared'
import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './base-api'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, rtkQueryErrorLogger),
  reducer: {
    app: appReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    createPost: createPostReducer,
    selectedPost: selectedPostReducer,
  },
})
