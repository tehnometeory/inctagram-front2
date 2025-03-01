import { showModal, useMyProfileQuery } from '@/features'
import { RoutesApp, useAppDispatch } from '@/shared'

import { useNRouter } from './useNRouter'

export const useMenuHandlers = () => {
  const router = useNRouter()
  const { data } = useMyProfileQuery()

  const dispatch = useAppDispatch()

  return [
    { itemCallback: () => router.push(RoutesApp.home), name: 'Home' },
    { itemCallback: () => router.push('/statistics'), name: 'Statistics' },
    {
      itemCallback: () => router.push(`${RoutesApp.profile}/${data?.id}`),
      name: 'My Profile',
    },
    {
      itemCallback: () => dispatch(showModal()),
      name: 'Create',
    },
  ]
}
