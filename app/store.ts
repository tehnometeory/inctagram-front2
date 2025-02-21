import { appReducer, authReducer } from '@/entities'
import {
  authApi,
  createPostReducer,
  expiredEmailLinkApi,
  forgotPasswordApi,
  getPostApi,
  logoutApi,
  selectedPostReducer,
  profileUserApi,
  setPasswordApi,
  signInApi,
  signUpApi,
} from '@/features'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      signUpApi.middleware,
      setPasswordApi.middleware,
      forgotPasswordApi.middleware,
      expiredEmailLinkApi.middleware,
      signInApi.middleware,
      logoutApi.middleware,
      profileUserApi.middleware,
      getPostApi.middleware
    ),
  reducer: {
    app: appReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    createPost: createPostReducer,
    [expiredEmailLinkApi.reducerPath]: expiredEmailLinkApi.reducer,
    [forgotPasswordApi.reducerPath]: forgotPasswordApi.reducer,
    [getPostApi.reducerPath]: getPostApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
    [profileUserApi.reducerPath]: profileUserApi.reducer,
    selectedPost: selectedPostReducer,
    [setPasswordApi.reducerPath]: setPasswordApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
})
