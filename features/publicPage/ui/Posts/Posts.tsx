import { BASE_URL_API } from '@/shared'

import s from './Posts.module.scss'

import { PostType } from '../../model'
import { Post } from './Post'

export const Posts = async () => {
  let isError = false
  let posts: PostType[] = []

  try {
    const response = await fetch(`${BASE_URL_API}posts/newest-posts`, {
      next: {
        revalidate: 60,
      },
    })

    posts = await response.json()
  } catch {
    isError = true
  }

  return (
    <div className={s.posts}>
      {isError ? (
        <h3>No posts...</h3>
      ) : (
        posts.map(({ createdAt, description, id, photos, user: { username } }) => (
          <Post
            description={description}
            key={id}
            photos={photos}
            publicationTime={createdAt}
            username={username}
          />
        ))
      )}
    </div>
  )
}
