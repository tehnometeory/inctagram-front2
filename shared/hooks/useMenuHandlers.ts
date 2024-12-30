import { useMyProfileQuery } from '@/features'
import { RoutesApp } from '@/shared'

import { useNRouter } from './useNRouter'

export const useMenuHandlers = () => {
  const router = useNRouter()
  const { data } = useMyProfileQuery()
  const currentUserId = data?.id

  return [
    { itemCallback: () => router.push('/statistics'), name: 'Statistics' },
    {
      itemCallback: () => router.push(`${RoutesApp.profile}/${currentUserId}`),
      name: 'My Profile',
    },
  ]
}
