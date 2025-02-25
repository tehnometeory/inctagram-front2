import { BASE_URL_API, PostType } from '@/shared'

import s from './Posts.module.scss'

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
        posts.map(({ createdAt, description, id, photos, user: { username }, userId }) => (
          <Post
            description={description}
            key={id}
            photos={photos}
            postId={id}
            publicationTime={createdAt}
            userId={userId}
            username={username}
          />
        ))
      )}
    </div>
  )
}
