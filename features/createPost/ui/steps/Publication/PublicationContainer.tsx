import { useState } from 'react'

import { useAppSelector } from '@/shared'
import { Carousel } from '@/shared/ui/Carousel'

import s from './PublicationContainer.module.scss'
import { updateDescription } from '@/features/createPost/model'
import { DescriptionPost } from './DescriptionPost'

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
          type={'Black'}
        />
        <DescriptionPost urlProfile={'URL_Profile'} sentNewPostDescription={updateDescription} showSeparator={true} description={description || ""} >
          <Location/>
        </DescriptionPost>
      </div>
    )
  }
}

const Location = () => {
  return <></>
}