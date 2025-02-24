import {
  hideEditModal,
  sentNewPostDescription,
  showPostModal,
  useSentNewDescriptionMutation,
} from '@/features/selectedPost'
import { DescriptionPost, useAppDispatch, useAppSelector } from '@/shared'
import { Button } from '@rambo-react/ui-meteors'
import Image from 'next/image'

import s from './EditPost.module.scss'

export const EditPost = () => {
  const post = useAppSelector(state => state.selectedPost.post)
  const id = post?.id
  const images = post?.photos?.map(photo => photo.url) ?? []
  const urlProfile = post?.user.username
  const description = post?.description
  const [sentNewDescription] = useSentNewDescriptionMutation()
  const dispatch = useAppDispatch()

  const handleSentNewDescription = () => {
    sentNewDescription({ description, id })
    dispatch(hideEditModal())
    dispatch(showPostModal())
  }

  return (
    <div className={s.container}>
      <div style={{ height: 503, width: 490 }}>
        <div
          style={{
            height: 503,
            position: 'relative',
            width: 490,
          }}
        >
          <Image
            alt={`Image 1}`}
            fill
            loading={'eager'}
            src={images[0]}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
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
