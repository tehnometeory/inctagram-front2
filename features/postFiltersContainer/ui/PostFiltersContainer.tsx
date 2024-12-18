import image1 from '@/public/images/expiredEmail.svg'
import image2 from '@/public/images/sign-up.svg'
import { Carousel } from '@/shared/ui/Carousel'

export const PostFiltersContainer = () => {
  return (
    <div>
      <Carousel images={[image1, image2]} type={'Gray'} />
    </div>
  )
}
