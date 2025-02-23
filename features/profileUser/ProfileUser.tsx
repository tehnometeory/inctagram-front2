'use client'

import { Button } from '@rambo-react/ui-meteors'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './ProfileUser.module.scss'

import { useProfileByIdPostsQuery, useProfileUserByIdQuery } from './api'
import { Post } from './post/Post'

export const ProfileUser = ({ userId }: { userId?: string }) => {
  const { data } = useProfileUserByIdQuery(userId as string)

  const { data: posts } = useProfileByIdPostsQuery({ id: userId as string, page: 1 })

  if (!data) {
    return null
  }

  return (
    <div className={s.profileUser}>
      <div className={s.profile}>
        <div className={clsx(s.item, s.itemImage)}>
          <Image
            alt={'user avatar'}
            className={s.avatar}
            height={204}
            src={'/images/avatar-default.webp'}
            width={204}
          />
        </div>
        <div className={clsx(s.item, s.itemNameProfile)}>
          <span className={s.titleProfile}>{data.username}</span>
          <Button className={s.btn} variant={'secondary'}>
            Profile Settings
          </Button>
        </div>
        <div className={clsx(s.item, s.itemStaticProfile)}>
          <span className={s.statistic}>
            {data.profileFollowing}
            <br />
            <small className={s.textStatistic}>Following</small>
          </span>
          <span className={s.statistic}>
            {data.profileFollowers} <br />
            <small className={s.textStatistic}> Followers</small>
          </span>
          <span className={s.statistic}>
            {data.postsCount}
            <br /> <small className={s.textStatistic}>Publications</small>
          </span>
        </div>
        <div className={clsx(s.item, s.itemAboutMe)}>
          <p className={s.textInfo}>{data.aboutMe}</p>
        </div>
      </div>
      <div className={s.posts}>
        {posts?.map(post => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}
