import { PostType } from '@/shared'

export type ProfileUserResponse = {
  aboutMe: string
  id: string
  postsCount: number
  privateStatus: string
  profileFollowers: number
  profileFollowing: number
  username: string
}

export type ProfileUserPostsResponse = PostType[]
