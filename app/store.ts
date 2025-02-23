import { baseApi } from '@/app/base-api'
import { appReducer, authReducer } from '@/entities'
import { createPostReducer, selectedPostReducer } from '@/features'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    app: appReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    createPost: createPostReducer,
    selectedPost: selectedPostReducer,
  },
})
