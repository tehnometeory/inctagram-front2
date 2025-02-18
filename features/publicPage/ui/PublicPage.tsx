'use client'

import s from './PublicPage.module.scss'

import { useFetchNewestPostsQuery, useFetchUsersCountQuery } from '../api'
import { Post } from './Post'
import { RegisteredUsers } from './RegisteredUsers'

export const PublicPage = () => {
  const { data: newestPostsData } = useFetchNewestPostsQuery()
  const { data: usersData } = useFetchUsersCountQuery()

  return (
    <div className={s.publicPage}>
      <RegisteredUsers usersCount={usersData?.data?.usersCount || 0} />

      <div className={s.posts}>
        {newestPostsData?.data ? (
          newestPostsData?.data.map(
            ({ createdAt, description, id, photos, user: { username } }) => (
              <Post
                description={description}
                key={id}
                photos={photos}
                publicationTime={createdAt}
                username={username}
              />
            )
          )
        ) : (
          <h3>No posts</h3>
        )}
      </div>
    </div>
  )
}
