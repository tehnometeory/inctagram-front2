import { useState } from 'react'

import { PostFilters } from '@/shared'
import { applyFilterToImage } from '@/shared/lib/applyFilterToImage'
import { Carousel } from '@/shared/ui/Carousel'

import styles from './PostFiltersContainer.module.scss'

import { imagesbase64 } from './base64images'

export const PostFiltersContainer = () => {
  const [images, setImages] = useState(imagesbase64)
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
  const processImages = async () => {
    const modifiedImagesArray: string[] = []

    for (let i = 0; i < images.length; i++) {
      const modifiedImage = await applyFilterToImage(images[i], activeFilters[i])

      modifiedImagesArray.push(modifiedImage)
    }

    setModifiedImages(modifiedImagesArray)
  }
  const handleNext = async () => {
    await processImages() // Ждём завершения обработки изображений
    console.log(modifiedImages) // Теперь выводим результат после обновления состояния
  }

  return (
    <div className={styles.container}>
      <Carousel
        activeFilters={activeFilters}
        activeSlide={activeImageIndex}
        images={images}
        setActiveSlide={setActiveImageIndex}
        type={'Gray'}
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
