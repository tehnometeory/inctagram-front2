import img2 from '@/public/images/expiredEmail.svg'
import img1 from '@/public/images/sign-up.svg'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Post, SelectedPostState } from './types'

// const initialState: SelectedPostState = {
//   isEditing: false,
//   isModalOpen: false,
//   post: null,
// }
const initialState: SelectedPostState = {
  isEditing: false,
  isModalOpen: true,
  post: {
    createdAt: '2025-01-23T16:00:58.415Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 'fgrg',
    photos: [img1, img2],
    privateStatus: 'fghgf',
    updatedAt: '2025-01-23T16:00:58.415Z',
    user: { username: 'URLProfiele' },
    userId: 'rdgth',
  },
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
