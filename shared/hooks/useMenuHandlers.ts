import { RoutesApp } from '@/shared'

import { useNRouter } from './useNRouter'

export const useMenuHandlers = () => {
  const router = useNRouter()

  return [
    { itemCallback: () => router.push('/statistics'), name: 'Statistics' },
    { itemCallback: () => router.push(RoutesApp.profile), name: 'My Profile' },
  ]
}
