'use client'

import s from './PublicPage.module.scss'

import { useFetchNewestPostsQuery } from '../api'
import { posts } from '../model'
import { Post } from './Post'
import { RegisteredUsers } from './RegisteredUsers'

export const PublicPage = () => {
  const { data } = useFetchNewestPostsQuery()

  console.log('data', data)

  return (
    <div className={s.publicPage}>
      <RegisteredUsers usersCount={9213} />

      <div className={s.posts}>
        {posts.map(({ avatar, description, images, publicationTime, username }) => (
          <Post
            avatar={avatar}
            description={description}
            images={images}
            key={username}
            publicationTime={publicationTime}
            username={username}
          />
        ))}
      </div>
    </div>
  )
}
