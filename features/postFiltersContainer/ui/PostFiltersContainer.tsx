import { useState } from 'react'

import image1 from '@/public/images/expiredEmail.svg'
import image3 from '@/public/images/rabstol_net_fields_15.jpg'
import image2 from '@/public/images/sign-up.svg'
import { PostFilters } from '@/shared'
import { applyFilterToImage } from '@/shared/lib/applyFilterToImage'
import { Carousel } from '@/shared/ui/Carousel'

export const PostFiltersContainer = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [images, setImages] = useState([image1, image2, image3]) // Массив изображений
  const [modifiedImages, setModifiedImages] = useState([image1, image2]) // Массив изменённых изображений
  const [activeImage, setActiveImage] = useState(images[0])
  const [filters, setFilters] = useState<string[]>(() => Array(images.length).fill('none'))
  const setActiveImageHandler = (index: number) => {
    setActiveImageIndex(index)
  }

  const setImageFilter = (filter: string, filterIndex: number) => {
    setActiveImage(images[activeImageIndex])

    const updatedFilters = [...filters]

    updatedFilters[filterIndex] = filter // Обновляем фильтр для нужного изображения
    setFilters(updatedFilters)

    const updatedImages = [...modifiedImages] // Копируем текущий массив изображений

    applyFilterToImage(images[filterIndex], filter).then(filteredImage => {
      updatedImages[filterIndex] = filteredImage // Обновляем изображение в массиве
      setModifiedImages(updatedImages) // Сохраняем обновлённый массив изображений
    })
  }

  const handleNext = () => {
    // Отправка изображений в Publish (например, передаем в компонент Publish)
    console.log(modifiedImages)
  }

  return (
    <div>
      <Carousel
        activeFilter={filters[activeImageIndex]}
        filters={filters}
        images={images}
        setActiveSlide={setActiveImageHandler}
        type={'Gray'}
      />
      <PostFilters activeImage={activeImage} setFilters={setImageFilter} />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
