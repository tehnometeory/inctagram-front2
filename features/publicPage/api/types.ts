import { Nullable, Post } from '@/shared'

export type Response<D> = {
  code: number
  data: Nullable<D>
  extensions: any[]
  isSuccess: boolean
}

export type NewestPostsResponse = Response<Post[]>
export type UsersCountResponse = Response<{ usersCount: number }>
