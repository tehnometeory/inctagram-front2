'use client'
import { ProfileUser, SelectedPost } from '@/features'
import { EditPost } from '@/features/selectedPost/ui/editPost/EditPost'
import { useParams } from 'next/navigation'

export default function ProfilePage() {
  const { userId } = useParams()

  return (
    <>
      <ProfileUser userId={userId as string} />
      <SelectedPost />
      <EditPost />
    </>
  )
}
