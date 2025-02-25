import { usePublishPost } from '@/features/createPost/hooks/usePublishPost'
import { useAppSelector } from '@/shared'
import { ArrowIosBack, Button } from '@rambo-react/ui-meteors'

import s from '../customHeaders.module.scss'

export const PublishHeader = () => {
  const { goBackHandler, publishPostHandler } = usePublishPost()
  const description = useAppSelector(state => state.createPost.currentPost.description) || ''

  return (
    <div className={s.headerContainer}>
      <button className={s.leftButton} onClick={goBackHandler} type={'button'}>
        <ArrowIosBack height={24} width={24} />
      </button>
      <p className={s.title}>Publication</p>
      <Button
        className={s.rightButton}
        disabled={!description}
        onClick={publishPostHandler}
        variant={'text'}
      >
        Publish
      </Button>
    </div>
  )
}
