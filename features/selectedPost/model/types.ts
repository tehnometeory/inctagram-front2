import { ErrorsMessagesResponse, Nullable } from '@/shared'

export type PostResponse<T> = ErrorsMessagesResponse | T

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
  isModalOpen: boolean
  post: Nullable<Post>
}
