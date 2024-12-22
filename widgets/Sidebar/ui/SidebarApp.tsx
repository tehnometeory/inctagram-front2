import { LogOutModal, useLogout } from '@/features'
import { useMenuHandlers } from '@/shared'
import { Sidebar } from '@rambo-react/ui-meteors'

import s from './SidebarApp.module.scss'

export const SidebarApp = () => {
  const sidebarCallbacks = useMenuHandlers()
  const { handleCloseModal, handleConfirmLogout, logoutItem, showModal } = useLogout()

  return (
    <div className={s.container}>
      <Sidebar callbacks={[...sidebarCallbacks, logoutItem]} />
      <LogOutModal isOpen={showModal} onClose={handleCloseModal} onConfirm={handleConfirmLogout} />
    </div>
  )
}
