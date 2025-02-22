'use client'
import { CancelPostModal, hideEditModal, showPostModal } from '@/features'
import { useAppDispatch, useAppSelector } from '@/shared'
import { Modal } from '@rambo-react/ui-meteors'

import s from '@/shared/styles/DescriptionPost.module.scss'

import { EditPostContainer } from './EditPostContainer'

export const EditPost = () => {
  const isEdit = useAppSelector(state => state.selectedPost.isEditing)
  const dispatch = useAppDispatch()

  const closeHandler = () => {
    dispatch(hideEditModal())
    dispatch(showPostModal())
  }

  if (!isEdit) {
    return null
  }

  return (
    <>
      <CancelPostModal />
      <Modal
        className={s.modal}
        isOpen={isEdit}
        onClose={closeHandler}
        onCloseOut={closeHandler}
        title={'Edit Post'}
      >
        <EditPostContainer />
      </Modal>
    </>
  )
}
