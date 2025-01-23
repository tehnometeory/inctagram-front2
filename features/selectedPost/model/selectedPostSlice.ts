import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Post, SelectedPostState } from './types'

const initialState: SelectedPostState = {
  isEditing: false,
  post: null,
}

export const selectedPostSlice = createSlice({
  initialState,
  name: 'selectedPost',
  reducers: {
    clearSelectedPost: state => {
      state.post = null
      state.isEditing = false
    },
    // deletePost: state => {
    //   state.post = null
    //   state.isEditing = false
    // },
    setSelectedPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
      state.isEditing = false
    },
    // startEditing: state => {
    //   state.isEditing = true
    // },
    // updatePost: (state, action: PayloadAction<Partial<Post>>) => {
    //   if (state.post) {
    //     state.post = { ...state.post, ...action.payload }
    //   }
    // },
  },
})

export const { clearSelectedPost, setSelectedPost } = selectedPostSlice.actions

export const selectedPostReducer = selectedPostSlice.reducer
