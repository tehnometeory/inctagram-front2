import { useGetPost } from '@/features'
import Image from 'next/image'

import s from './Post.module.scss'

import { PostResponse } from '../api/types'

type Props = {
  post: PostResponse
}

export const Post = ({ post }: Props) => {
  const { refreshPostHandler } = useGetPost(post.id)

  const imageUrl = post.photos?.[0]?.url

  if (!imageUrl) {
    return null
  }

  return (
    <div className={s.post} key={post.id} onClick={refreshPostHandler}>
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
