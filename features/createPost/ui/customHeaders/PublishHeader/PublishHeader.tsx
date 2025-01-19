import { nextStep, prevStep } from '@/features/createPost/model'
import { useAppDispatch } from '@/shared'
import { ArrowIosBack, Button } from '@rambo-react/ui-meteors'

import s from '../customHeaders.module.scss'

export const PublishHeader = () => {
  const dispatch = useAppDispatch()
  const goBackHandler = () => {
    dispatch(prevStep())
  }
  const goNextHandler = () => {
    dispatch(nextStep())
  }

  return (
    <div className={s.headerContainer}>
      <button className={s.leftButton} onClick={goBackHandler}>
        <ArrowIosBack height={24} width={24} />
      </button>
      <p className={s.title}>Publication</p>
      <Button className={s.rightButton} onClick={goNextHandler} variant={'text'}>
        Publish
      </Button>
    </div>
  )
}
