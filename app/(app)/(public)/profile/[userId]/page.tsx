'use client'

import { useEffect } from 'react'

import { SelectedPost, UserProfile, showPostModal, useGetPost } from '@/features'
import { useAppDispatch } from '@/shared'
import { useParams, useSearchParams } from 'next/navigation'

export default function ProfilePage() {
  const { userId } = useParams()
  const params = useSearchParams()
  const dispatch = useAppDispatch()

  const postId = params.get('postId')

  useGetPost(postId || '')

  useEffect(() => {
    if (postId) {
      dispatch(showPostModal())
    }
  }, [postId, dispatch])

  return (
    <>
      <UserProfile userId={userId as string} />
      <SelectedPost />
    </>
  )
}
