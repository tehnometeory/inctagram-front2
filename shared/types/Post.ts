export type Post = {
  createdAt: string
  description: string
  id: string
  photos: {
    createdAt: string
    id: string
    postId: string
    url: string
  }
  privateStatus: string
  updatedAt: string
  user: {
    username: string
  }
  userId: string
}
