import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Post, SelectedPostState } from './types'

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
    hidePostModal(state) {
      state.isModalOpen = false
    },
    setSelectedPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
      state.isEditing = false
    },
    showPostModal(state) {
      state.isModalOpen = true
    },
  },
})

export const { clearSelectedPost, hidePostModal, setSelectedPost, showPostModal } =
  selectedPostSlice.actions

export const selectedPostReducer = selectedPostSlice.reducer
