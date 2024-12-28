'use client'

import { useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import s from './Post.module.scss'

// import { Carousel } from '../Carousel'

type Props = {
  avatar: string
  description: string
  images: string[]
  publicationTime: string
  username: string
}

export const Post = ({ avatar, description, images, publicationTime, username }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onShowMoreClickHandler = () => setIsExpanded(!isExpanded)

  return (
    <div className={s.publicPagePost}>
      <div className={clsx(s.postImages, isExpanded && s.hided)}>
        {/* {images.length === 1 ? ( */}
        <Image alt={'avatar'} height={240} priority src={images[0]} width={240} />
        {/*  ) : (
           <Carousel images={images} type={'Black'} />
         )} */}
      </div>

      <div className={s.user}>
        <Image alt={'avatar'} className={s.avatar} height={36} priority src={avatar} width={36} />
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
