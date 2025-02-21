'use client'
import ImageTest1 from '@/public/images/test-posts-image/Mask-1.png'
import ImageTest2 from '@/public/images/test-posts-image/Mask-2.png'
import ImageTest3 from '@/public/images/test-posts-image/Mask-3.png'
import ImageTest4 from '@/public/images/test-posts-image/Mask-4.png'
import ImageTest5 from '@/public/images/test-posts-image/Mask-5.png'
import ImageTest6 from '@/public/images/test-posts-image/Mask-6.png'
import ImageTest7 from '@/public/images/test-posts-image/Mask-7.png'
import ImageTest8 from '@/public/images/test-posts-image/Mask-8.png'
import { Button } from '@rambo-react/ui-meteors'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './ProfileUser.module.scss'

import { useProfileUserByIdQuery } from './api'

const testDataImagesPost = [
  ImageTest1,
  ImageTest2,
  ImageTest3,
  ImageTest4,
  ImageTest5,
  ImageTest6,
  ImageTest7,
  ImageTest8,
]

export const ProfileUser = ({ userId }: { userId?: string }) => {
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
      <div className={s.posts}>
        {testDataImagesPost.map((image, index) => (
          <div className={s.post} key={index}>
            <Image
              alt={`Post image ${index + 1}`}
              className={s.imagePost}
              height={228}
              onClick={() => {
                console.log('открытие поста')
              }}
              src={image}
              width={234}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
