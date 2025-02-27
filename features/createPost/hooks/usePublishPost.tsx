import { setAlert } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'

import { usePublishPostMutation } from '../api'
import { hideModal, prevStep, resetCurrentPost } from '../model'
import { ImageDraft } from '../model/types'

export const usePublishPost = () => {
  const dispatch = useAppDispatch()
  const [publishPost] = usePublishPostMutation()
  const { description, images } = useAppSelector(state => state.createPost.currentPost)

  const convertUrlsToBlobs = (images: ImageDraft[]) => {
    return Promise.all(
      images.map(url => fetch(url.filteredImage).then(response => response.blob()))
    )
  }

  const goBackHandler = () => {
    dispatch(prevStep())
  }

  const publishPostHandler = async () => {
    const formData = new FormData()

    if (description) {
      formData.append('description', description)
    }

    const blobs = await convertUrlsToBlobs(images)

    blobs.forEach(blob => {
      formData.append('files', blob)
    })

    try {
      await publishPost(formData).unwrap()
      dispatch(resetCurrentPost())
      dispatch(hideModal())
      dispatch(setAlert({ message: 'The post has been published:', type: 'accepted' }))
    } catch (error) {
      dispatch(
        setAlert({
          message: `Error publishing post:`,
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
