import { setSelectedPost, showPostModal, useGetPost } from '@/features'
import { PostType, useAppDispatch } from '@/shared'
import Image from 'next/image'

import s from './Post.module.scss'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => {
  const imageUrl = post.photos?.[0]?.url
  const { refreshPostHandler } = useGetPost(post.id)

  if (!imageUrl) {
    return null
  }

  const onPostClick = () => {
    refreshPostHandler()
  }

  return (
    <div className={s.post} key={post.id} onClick={onPostClick}>
      <Image
        alt={`Post image ${post.id}`}
        className={s.imagePost}
        height={228}
        priority
        src={imageUrl}
        width={234}
      />
    </div>
  )
}
