import { setSelectedPost, showPostModal } from '@/features'
import { PostType, useAppDispatch } from '@/shared'
import Image from 'next/image'

import s from './Post.module.scss'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => {
  const dispatch = useAppDispatch()
  const imageUrl = post.photos?.[0]?.url

  if (!imageUrl) {
    return null
  }

  const onPostClick = () => {
    dispatch(setSelectedPost(post))
    dispatch(showPostModal())
  }

  return (
    <div className={s.post} key={post.id} onClick={onPostClick}>
      <Image
        alt={`Post image ${post.id}`}
        className={s.imagePost}
        height={228}
        src={imageUrl}
        width={234}
      />
    </div>
  )
}
