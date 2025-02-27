import { useState } from 'react'

import {
  setSelectedPost,
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
  const userName = post?.user.username
  const [newDescription, setNewDescription] = useState(post?.description || '')
  const [sentNewDescription, { isLoading }] = useSentNewDescriptionMutation()
  const dispatch = useAppDispatch()

  const handleSentNewDescription = () => {
    if (id && newDescription) {
      sentNewDescription({ description: newDescription, id })
        .then(response => {
          dispatch(setSelectedPost({ ...post, description: newDescription }))
          dispatch(showPostModal())
        })
        .catch(error => {
          console.error('Error sending new description:', error)
        })
    }
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
        description={newDescription}
        sendNewPostDescription={setNewDescription}
        userName={userName}
      >
        <Button className={s.buttonEdit} disabled={isLoading} onClick={handleSentNewDescription}>
          Save Changes
        </Button>
      </DescriptionPost>
    </div>
  )
}
