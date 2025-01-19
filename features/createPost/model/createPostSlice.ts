import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AddImagePayload, CreatePostState } from './types'

const initialState: CreatePostState = {
  currentPost: {
    currentStep: 1,
    description: null,
    images: [],
  },
  draft: null,
  isAspectControlOpen: false,
  isModalOpen: false,
  isThumbnailsControlOpen: false,
  isZoomControlOpen: false,
}

export const createPostSlice = createSlice({
  initialState,
  name: 'createPost',
  reducers: {
    addImage(state, action: PayloadAction<AddImagePayload>) {
      const image = {
        ...action.payload,
        aspect: 1,
        croppedImage: null,
        filteredImage: null,
        zoom: 1,
      }

      state.currentPost.images.push(image)
    },
    clearDraft(state) {
      state.draft = null
    },
    hideModal(state) {
      state.isModalOpen = false
    },
    loadDraft(state) {
      if (state.draft) {
        state.currentPost = { ...state.draft }
      }
    },
    nextStep(state) {
      state.currentPost.currentStep += 1
    },
    prevStep(state) {
      if (state.currentPost.currentStep > 1) {
        state.currentPost.currentStep -= 1
      }
    },
    removeImage(state, action: PayloadAction<string>) {
      const imageToRemove = state.currentPost.images.find(image => image.id === action.payload)

      if (imageToRemove) {
        const { croppedImage, originalImage } = imageToRemove

        if (originalImage) {
          URL.revokeObjectURL(originalImage)
        }
        if (croppedImage) {
          URL.revokeObjectURL(croppedImage)
        }
        state.currentPost.images = state.currentPost.images.filter(
          image => image.id !== action.payload
        )
      }
    },
    resetCurrentPost(state) {
      state.currentPost.images.forEach(image => {
        const { croppedImage, filteredImage, originalImage } = image

        if (originalImage) {
          URL.revokeObjectURL(originalImage)
        }
        if (croppedImage) {
          URL.revokeObjectURL(croppedImage)
        }
        if (filteredImage) {
          URL.revokeObjectURL(filteredImage)
        }
      })
      state.currentPost.currentStep = 1
      state.currentPost.description = null
      state.currentPost.images = []
    },
    saveDraft(state) {
      state.draft = { ...state.currentPost }
    },
    setAspect(state, action: PayloadAction<{ aspect: number; id: string }>) {
      const { aspect, id } = action.payload

      state.currentPost.images = state.currentPost.images.map(image =>
        image.id === id ? { ...image, aspect: aspect } : image
      )
    },
    setAspectControl(state, action: PayloadAction<boolean>) {
      state.isAspectControlOpen = action.payload
    },
    setThumbnailsControl(state, action: PayloadAction<boolean>) {
      state.isThumbnailsControlOpen = action.payload
    },
    setZoom(state, action: PayloadAction<{ id: string; zoom: number }>) {
      const { id, zoom } = action.payload

      state.currentPost.images = state.currentPost.images.map(image =>
        image.id === id ? { ...image, zoom: zoom } : image
      )
    },
    setZoomControl(state, action: PayloadAction<boolean>) {
      state.isZoomControlOpen = action.payload
    },
    showModal(state) {
      state.isModalOpen = true
    },
    updateCroppedImage(state, action: PayloadAction<{ croppedImage: string; id: string }>) {
      const { croppedImage, id } = action.payload

      state.currentPost.images = state.currentPost.images.map(image =>
        image.id === id ? { ...image, croppedImage: croppedImage } : image
      )
    },
  },
})

export const {
  addImage,
  clearDraft,
  hideModal,
  loadDraft,
  nextStep,
  prevStep,
  removeImage,
  resetCurrentPost,
  saveDraft,
  setAspect,
  setAspectControl,
  setThumbnailsControl,
  setZoom,
  setZoomControl,
  showModal,
  updateCroppedImage,
} = createPostSlice.actions

export const createPostReducer = createPostSlice.reducer
