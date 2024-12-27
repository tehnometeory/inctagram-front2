import { ResetPasswordResponse } from '@/features/forgotPassword/api/types'

export type ProfileUserResponse = {
  aboutMe: string
  id: string
  postsCount: number
  privateStatus: string
  profileFollowers: number
  profileFollowing: number
  username: string
}
