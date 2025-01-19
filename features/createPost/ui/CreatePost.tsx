'use client'

import { useAppDispatch, useAppSelector } from '@/shared'
import { Modal } from '@rambo-react/ui-meteors'

import s from './CreatePost.module.scss'

import { hideModal, resetCurrentPost } from '../model'
import { AddImage, CropImage } from './steps'

export const CreatePost = () => {
  const {
    currentPost: { currentStep },
    isModalOpen,
  } = useAppSelector(state => state.createPost)
  const dispatch = useAppDispatch()

  const closeHandler = () => {
    dispatch(resetCurrentPost())
    dispatch(hideModal())
  }

  if (!isModalOpen) {
    return null
  }

  const title = currentStep === 1 ? 'Add Photo' : 'Cropping'

  return (
    <Modal className={s.modal} isOpen={isModalOpen} onClose={closeHandler} title={title}>
      {currentStep === 1 && <AddImage />}
      {currentStep === 2 && <CropImage />}
    </Modal>
  )
}
