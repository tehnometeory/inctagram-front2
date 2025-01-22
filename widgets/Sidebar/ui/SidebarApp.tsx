import { showModal, useLogout } from '@/features'
import { useAppDispatch, useMenuHandlers } from '@/shared'
import { Sidebar } from '@rambo-react/ui-meteors'

import s from './SidebarApp.module.scss'

export const SidebarApp = () => {
  const sidebarCallbacks = useMenuHandlers()
  const { logoutItem } = useLogout()

  return (
    <div className={s.container}>
      <Sidebar callbacks={[...sidebarCallbacks, logoutItem]} />
    </div>
  )
}
