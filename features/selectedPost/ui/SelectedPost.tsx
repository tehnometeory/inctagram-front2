import { Carousel, useAppSelector } from '@/shared'
import { Modal } from '@rambo-react/ui-meteors'

export const SelectedPost = () => {
  const post = useAppSelector(state => state.selectedPost.post)

  const images = post?.photos.map(photo => photo.url) ?? []

  if (post === null) {
    return null
  }

  return (
    <Modal>
      <div>
        <Carousel activeSlide={0} images={images} type={'Gray'} />
      </div>
    </Modal>
  )
}
