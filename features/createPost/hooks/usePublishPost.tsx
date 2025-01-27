import { useEffect } from 'react'

import { setAlert } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'

import { useGetNewestPostsQuery, usePublishPostMutation } from '../api'
import { hideModal, prevStep, resetCurrentPost } from '../model'

export const usePublishPost = () => {
  const dispatch = useAppDispatch()
  const [publishPost, { isSuccess }] = usePublishPostMutation()
  const { refetch } = useGetNewestPostsQuery()
  const images = useAppSelector(state => state.createPost.currentPost.images)
  const description = useAppSelector(state => state.createPost.currentPost.description)

  useEffect(() => {
    if (isSuccess) {
      refetch()
    }
  }, [isSuccess, refetch])

  const goBackHandler = () => {
    dispatch(prevStep())
  }

  const publishPostHandler = async () => {
    const formData = new FormData()

    if (description) {
      formData.append('description', description)
    }

    images.forEach(image => {
      formData.append('files', image.filteredImage)
    })

    try {
      await publishPost(formData).unwrap()

      dispatch(resetCurrentPost())
      dispatch(hideModal())
      dispatch(setAlert({ message: 'Пост опубликован:', type: 'accepted' }))
    } catch (error) {
      dispatch(
        setAlert({
          message: `ошибка при публикации поста:`,
          type: 'error',
        })
      )
    }
  }

  return {
    goBackHandler,
    publishPostHandler,
  }
}
