'use client'
import { Button } from '@rambo-react/ui-meteors'
import { clsx } from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import s from './ProfileUser.module.scss'

import { useProfileUserByIdQuery } from './api'

export const ProfileUser = () => {
  const { userId } = useParams()
  const { data } = useProfileUserByIdQuery(userId as string)

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
          <p className={s.textInfo}>
            {data.aboutMe} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt. laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={s.posts}></div>
    </div>
  )
}
