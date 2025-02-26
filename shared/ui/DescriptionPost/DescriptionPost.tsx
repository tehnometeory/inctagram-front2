import React, { ChangeEvent, ReactNode, useCallback } from 'react'

import { useAppDispatch } from '@/shared'
import { TextArea } from '@rambo-react/ui-meteors'
import { PayloadAction } from '@reduxjs/toolkit'

import s from './DescriptionPost.module.scss'

import { NameAndAvatarUser } from '../NameAndAvatarUser/NameAndAvatarUser'

type Props = {
  children: ReactNode
  description: string
  sentNewPostDescription: (payload: { newDescription: string }) => PayloadAction<{
    newDescription: string
  }>
  showSeparator?: boolean
  urlProfile?: string
}
export const DescriptionPost = ({
  children,
  description,
  sentNewPostDescription,
  showSeparator = false,
  urlProfile = '',
}: Props) => {
  const dispatch = useAppDispatch()
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newDescription = event.currentTarget.value

      dispatch(sentNewPostDescription({ newDescription }))
    },
    [dispatch, sentNewPostDescription]
  )

  return (
    <div className={s.containerWrapper}>
      <div className={s.container}>
        <NameAndAvatarUser urlProfile={urlProfile} />
        <TextArea
          className={s.description}
          label={'Add publication descriptions'}
          maxLength={500}
          maxLengthVisible
          onChange={onChangeHandler}
          value={description}
        />
        {showSeparator ? <div className={s.separator} /> : null}
        {children}
      </div>
    </div>
  )
}
