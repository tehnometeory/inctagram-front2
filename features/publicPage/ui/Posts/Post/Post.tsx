'use client'

import { useState } from 'react'

import { Photo } from '@/features'
import { Carousel } from '@/shared'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Post.module.scss'

type Props = {
  avatar?: string
  description: string
  photos: Photo[]
  publicationTime: string
  username: string
}

export const Post = ({ avatar, description, photos, publicationTime, username }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onShowMoreClickHandler = () => setIsExpanded(!isExpanded)

  const photosSrc = photos.length === 1 ? photos[0].url : photos.map(photo => photo.url)

  return (
    <div className={s.publicPagePost}>
      <div className={clsx(s.postImages, isExpanded && s.hided)}>
        {photos.length === 1 ? (
          <Image alt={'avatar'} height={240} priority src={photosSrc as string} width={240} />
        ) : (
          <Carousel images={photosSrc as string[]} type={'Black'} />
        )}
      </div>

      <div className={s.user}>
        <Image
          alt={'avatar'}
          className={s.avatar}
          height={36}
          priority
          src={avatar || '/images/avatar-default.webp'}
          width={36}
        />
        {username}
      </div>

      <span className={s.publicationTime}>{publicationTime}</span>
      <div>
        <p className={clsx(s.description, isExpanded && s.expanded)}>{description}</p>

        <button className={s.showMore} onClick={onShowMoreClickHandler} type={'button'}>
          {isExpanded ? 'Hide' : 'Show more'}
        </button>
      </div>
    </div>
  )
}
