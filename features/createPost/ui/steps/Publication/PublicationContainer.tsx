import { updateDescription } from '@/features/createPost/model'
import { Carousel, DescriptionPost, useAppDispatch, useAppSelector } from '@/shared'

import s from './PublicationContainer.module.scss'

import { LocationPost } from './LocationPost/LocationPost'

export const PublicationContainer = () => {
  {
    const { description, images } = useAppSelector(state => state.createPost.currentPost)
    const filteredImages = images.map(image => image.filteredImage)

    const dispatch = useAppDispatch()

    const handleDescriptionChange = (newDescription: string) => {
      dispatch(updateDescription({ newDescription }))
    }

    return (
      <div className={s.container}>
        <Carousel images={filteredImages} />
        <DescriptionPost
          description={description as string}
          sendNewPostDescription={handleDescriptionChange}
          showSeparator
          userName={'URL_Profile'}
        >
          <LocationPost />
        </DescriptionPost>
      </div>
    )
  }
}
