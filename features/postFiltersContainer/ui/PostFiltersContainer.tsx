import { useState } from 'react'

import image1 from '@/public/images/expiredEmail.svg'
import image2 from '@/public/images/sign-up.svg'
import { PostFilters } from '@/shared'
import { applyFilterToImage } from '@/shared/lib/applyFilterToImage'
import { Carousel } from '@/shared/ui/Carousel'

import styles from './PostFiltersContainer.module.scss'

export const PostFiltersContainer = () => {
  const [images, setImages] = useState([image1, image2])
  const [modifiedImages, setModifiedImages] = useState<string[]>([])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeFilters, setActiveFilters] = useState<string[]>(() =>
    Array(images.length).fill('none')
  )

  const setFilter = (filter: string, activeImageIndex: number) => {
    setActiveFilters(prevFilters =>
      prevFilters.map((none, i) => (i === activeImageIndex ? filter : none))
    )
  }

  const handleNext = async () => {
    const modifiedImagesArray: string[] = []

    for (let i = 0; i < images.length; i++) {
      const modifiedImage = await applyFilterToImage(images[i].src, activeFilters[i])

      modifiedImagesArray.push(modifiedImage)
    }

    setModifiedImages(modifiedImagesArray)
  }

  return (
    <div className={styles.container}>
      <Carousel
        activeFilters={activeFilters}
        activeSlide={activeImageIndex}
        images={images}
        passActiveSlide={setActiveImageIndex}
        type={'Black'}
      />
      <PostFilters
        activeImage={images[activeImageIndex]}
        activeImageIndex={activeImageIndex}
        setFilter={setFilter}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
