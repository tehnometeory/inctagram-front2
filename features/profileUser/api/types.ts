export type ProfileUserResponse = {
  aboutMe: string
  id: string
  postsCount: number
  privateStatus: string
  profileFollowers: number
  profileFollowing: number
  username: string
}

export type PostResponse = {
  createdAt: string
  description: string
  id: string
  photos: {
    createdAt: string
    id: string
    url: string
  }[]
  privateStatus: true
  updatedAt: string
  user: {
    username: string
  }
  userId: string
}

export type ProfileUserPostsResponse = PostResponse[]
