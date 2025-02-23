'use client'
import { ProfileUser, SelectedPost } from '@/features'
import { EditPostContainer } from '@/features/selectedPost/ui/editPost/EditPostContainer'
import { useParams } from 'next/navigation'

export default function ProfilePage() {
  const { userId } = useParams()

  return (
    <>
      <ProfileUser userId={userId as string} />
      <SelectedPost />
      <EditPostContainer />
    </>
  )
}
