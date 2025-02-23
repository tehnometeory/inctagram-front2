import React, { ChangeEvent, ReactNode, memo, useCallback } from 'react'

import ava from '@/public/images/test_userAvatar.png'
import { useAppDispatch } from '@/shared'
import { TextArea } from '@rambo-react/ui-meteors'
import { PayloadAction } from '@reduxjs/toolkit'
import Image from 'next/image'

import s from '@/shared/styles/DescriptionPost.module.scss'

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
    [sentNewPostDescription]
  )

  return (
    <div className={s.containerWrapper}>
      <div className={s.container}>
        <ProfileInfo urlProfile={urlProfile} />
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

const ProfileInfo = ({ urlProfile }: { urlProfile: string }) => {
  return (
    <div className={s.avaWrapper}>
      <Image alt={'userAvatar'} className={s.ava} src={ava} />
      <span className={s.urlProfile}>{urlProfile}</span>
    </div>
  )
}
