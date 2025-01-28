import { useState } from 'react'

import { useAppSelector } from '@/shared'
import { Carousel } from '@/shared/ui/Carousel'

import s from './PublicationContainer.module.scss'

import { PublicationPost } from './Publication'

export const PublicationContainer = () => {
  {
    const images = useAppSelector(state => state.createPost.currentPost.images)
    const croppedImages = images.map(image => image.croppedImage)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    return (
      <div className={s.container}>
        <Carousel
          activeSlide={activeImageIndex}
          images={croppedImages}
          passActiveSlide={setActiveImageIndex}
          type={'Black'}
        />
        <PublicationPost />
      </div>
    )
  }
}
