import { Carousel, useAppSelector } from '@/shared'
import { Button, Modal, MoreHorizontalOutline } from '@rambo-react/ui-meteors'

import s from './SelectedPost.module.scss'

import { convertToRelativeTime } from '../utils/convertToRelativeTime'

export const SelectedPost = () => {
  const { isModalOpen, post } = useAppSelector(state => state.selectedPost)

  const images = post?.photos.map(photo => photo.url) ?? []

  if (post === null || !isModalOpen) {
    return null
  }

  const timeAgo = convertToRelativeTime(post.createdAt)

  return (
    <Modal className={s.Modal} isOpen={isModalOpen} withoutHeader>
      <div className={s.container}>
        <Carousel images={images} type={'Gray'} />
        <div>
          <div className={s.header}>
            <div>
              <p className={s.userName}>{post.user.username}</p>
            </div>
            <Button variant={'text'}>
              <MoreHorizontalOutline fill={'var(--color-accent-500'} height={24} width={24} />
            </Button>
          </div>
          <div className={s.descriptionAndCommentsBlock}>
            <div className={s.descriptionBlock}>
              <p className={s.description}>
                <span className={s.descriptionUserName}>{post.user.username}</span>{' '}
                {post.description}
              </p>
              <p className={s.time}>{timeAgo}</p>
            </div>
            <div className={s.commentsBlock}></div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
