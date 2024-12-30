'use client'
import { Button } from '@rambo-react/ui-meteors'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import s from './ProfileUser.module.scss'

import { useProfileUserByIdQuery } from './api'

export const ProfileUser = () => {
  const { userId } = useParams()
  const { data } = useProfileUserByIdQuery(userId as string)

  if (!data) {
    return
  }

  return (
    <div className={s.profile}>
      <div className={s.container}>
        <Image
          alt={'user avatar'}
          className={s.avatar}
          height={204}
          src={'/images/avatar-default.webp'}
          width={204}
        />
        <div className={s.infoProfileWrapper}>
          <div className={s.infoProfile}>
            <span className={s.titleProfile}>{data.username}</span>
            <Button className={s.btn} variant={'secondary'}>
              Profile Settings
            </Button>
          </div>
          <div className={s.infoStatistic}>
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
          <p className={s.textInfo}>{data.aboutMe}</p>
        </div>
      </div>
    </div>
  )
}
