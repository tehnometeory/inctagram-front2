import { Nullable } from '@/shared'

type Photo = {
  createdAt: string
  id: string
  postId: string
  url: string
}

type User = {
  username: string
}

export type Post = {
  createdAt: string
  description: string
  id: string
  photos: Photo[]
  privateStatus: string
  updatedAt: string
  user: User
  userId: string
}

export type SelectedPostState = {
  isEditing: boolean
  post: Nullable<Post>
}
