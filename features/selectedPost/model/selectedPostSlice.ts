import { PostType } from '@/shared'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SelectedPostState } from './types'

const initialState: SelectedPostState = {
  isEditing: false,
  isModalOpen: false,
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
    hideEditModal(state) {
      state.isEditing = false
    },
    hidePostModal(state) {
      state.isModalOpen = false
    },
    sentNewPostDescription(state, action: PayloadAction<{ newDescription: string }>) {
      if (state.post) {
        state.post.description = action.payload.newDescription
      }
    },
    setSelectedPost: (state, action: PayloadAction<PostType>) => {
      state.post = action.payload
      state.isEditing = false
    },
    showEditModal(state) {
      state.isEditing = true
    },
    showPostModal(state) {
      state.isModalOpen = true
    },
  },
})

export const {
  clearSelectedPost,
  hideEditModal,
  hidePostModal,
  sentNewPostDescription,
  setSelectedPost,
  showEditModal,
  showPostModal,
} = selectedPostSlice.actions

export const selectedPostReducer = selectedPostSlice.reducer
