import { useState } from 'react'

import { updateDescription } from '@/features/createPost/model'
import { useAppSelector } from '@/shared'
import { Carousel } from '@/shared/ui/Carousel'

import s from './PublicationContainer.module.scss'

import { DescriptionPost } from './DescriptionPost'
import { LocationPost } from './LocationPost/LocationPost'

export const PublicationContainer = () => {
  {
    const images = useAppSelector(state => state.createPost.currentPost.images)
    const croppedImages = images.map(image => image.croppedImage)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const description = useAppSelector(state => state.createPost.currentPost.description)

    return (
      <div className={s.container}>
        <Carousel
          activeSlide={activeImageIndex}
          images={croppedImages}
          passActiveSlide={setActiveImageIndex}
        />
        <DescriptionPost
          description={description || ''}
          sentNewPostDescription={updateDescription}
          showSeparator
          urlProfile={'URL_Profile'}
        >
          <LocationPost />
        </DescriptionPost>
      </div>
    )
  }
}
