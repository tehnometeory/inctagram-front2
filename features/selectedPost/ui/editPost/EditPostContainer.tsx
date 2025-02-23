import { useCallback } from 'react'

import { DescriptionPost } from '@/features/createPost/ui/steps/Publication/DescriptionPost'
import {
  hideEditModal,
  sentNewPostDescription,
  showPostModal,
  useSentNewDescriptionMutation,
} from '@/features/selectedPost'
import { Carousel, useAppDispatch, useAppSelector } from '@/shared'
import { Button } from '@rambo-react/ui-meteors'

import s from './EditPostContainer.module.scss'

export const EditPostContainer = () => {
  const post = useAppSelector(state => state.selectedPost.post)
  const id = useAppSelector(state => state.selectedPost.post?.id)
  const images = post?.photos?.map(photo => photo.url) ?? []
  const urlProfile = post?.user.username
  const description = useAppSelector(state => state.selectedPost.post?.description)
  const [sentNewDescription] = useSentNewDescriptionMutation()
  const dispatch = useAppDispatch()

  const handleSentNewDescription = () => {
    sentNewDescription({ description, id })
    dispatch(hideEditModal())
    dispatch(showPostModal())
  }

  return (
    <div className={s.container}>
      <Carousel images={images} />
      <DescriptionPost
        description={description || ''}
        sentNewPostDescription={sentNewPostDescription}
        urlProfile={urlProfile}
      >
        <Button className={s.buttonEdit} onClick={handleSentNewDescription}>
          Save Changes
        </Button>
      </DescriptionPost>
    </div>
  )
}
