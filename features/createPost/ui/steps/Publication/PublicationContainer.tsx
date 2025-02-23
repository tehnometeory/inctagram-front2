import { useAppSelector } from '@/shared'
import { Carousel } from '@/shared/ui/Carousel'

import s from './PublicationContainer.module.scss'

import { PublicationPost } from './Publication'

export const PublicationContainer = () => {
  {
    const images = useAppSelector(state => state.createPost.currentPost.images)
    const filtredImages = images.map(image => image.filteredImage)

    return (
      <div className={s.container}>
        <Carousel images={filtredImages} />
        <PublicationPost />
      </div>
    )
  }
}
