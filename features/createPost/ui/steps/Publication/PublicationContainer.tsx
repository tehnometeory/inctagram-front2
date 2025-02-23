import { updateDescription } from '@/features/createPost/model'
import { useAppSelector } from '@/shared'
import { Carousel } from '@/shared/ui/Carousel'
import { DescriptionPost } from '@/shared/ui/DescriptionPost'

import s from './PublicationContainer.module.scss'

import { LocationPost } from './LocationPost/LocationPost'

export const PublicationContainer = () => {
  {
    const images = useAppSelector(state => state.createPost.currentPost.images)
    const filteredImages = images.map(image => image.filteredImage)
    const description = useAppSelector(state => state.createPost.currentPost.description)

    return (
      <div className={s.container}>
        <Carousel images={filteredImages} />
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
