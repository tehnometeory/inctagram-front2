import React, { ChangeEvent } from 'react'

import { updateDescription } from '@/features/createPost/model'
import { useAppDispatch, useAppSelector } from '@/shared'
import { TextArea } from '@rambo-react/ui-meteors'
import Image from 'next/image'

import s from './Publication.module.scss'

import ava from '../../../../../public/images/image 1.png'

export const PublicationPost = () => {
  const description = useAppSelector(state => state.createPost.currentPost.description) || ''
  const dispatch = useAppDispatch()

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.currentTarget.value

    dispatch(updateDescription({ newDescription }))
  }

  return (
    <div className={s.containerWrapper}>
      <div className={s.container}>
        <div className={s.avaWrapper}>
          <Image alt={'userAvatar'} className={s.ava} src={ava} />
          <a className={s.urlProfile}>URLProfile</a>
        </div>
        <TextArea
          className={s.description}
          label={'Add publication descriptions'}
          maxLength={500}
          maxLengthVisible
          onChange={onChangeHandler}
          value={description}
        />
        <div className={s.location}>Add location</div>
      </div>
    </div>
  )
}
