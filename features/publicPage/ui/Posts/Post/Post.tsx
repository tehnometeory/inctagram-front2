'use client'

import { useState } from 'react'

import { Photo } from '@/features'
import { Carousel, getTimeAgo } from '@/shared'
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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const onShowMoreClickHandler = () => setIsDescriptionExpanded(!isDescriptionExpanded)

  description = description.repeat(100).split('').join(' ')

  const descriptionText = isDescriptionExpanded ? description : description.slice(0, 100).trim()
  const descriptionEnding = isDescriptionExpanded ? ' ' : (description.length > 100 && '... ') || ''

  const photo =
    photos.length === 1 || isDescriptionExpanded ? (
      <Image alt={'avatar'} height={240} priority src={photos[0].url} width={240} />
    ) : (
      <Carousel images={photos.map(photo => photo.url)} miniVersion />
    )

  return (
    <div className={s.publicPagePost}>
      <div className={clsx(s.postImages, isDescriptionExpanded && s.hiden)}>{photo}</div>

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

      <span className={s.publicationTime}>{getTimeAgo(publicationTime)}</span>

      <p className={s.description}>
        {descriptionText + descriptionEnding}

        {description.length > 100 && (
          <button className={s.showMore} onClick={onShowMoreClickHandler} type={'button'}>
            {isDescriptionExpanded ? 'Hide' : 'Show more'}
          </button>
        )}
      </p>
    </div>
  )
}
