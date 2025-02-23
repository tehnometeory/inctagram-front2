import { LogOutModal, showModal, useLogout } from '@/features'
import { useAppDispatch, useMenuHandlers } from '@/shared'
import { Sidebar } from '@rambo-react/ui-meteors'

import s from './SidebarApp.module.scss'

export const SidebarApp = () => {
  const sidebarCallbacks = useMenuHandlers()
  const { handleCloseModal, handleConfirmLogout, logoutItem, showModalLogout } = useLogout()
  const dispatch = useAppDispatch()

  const createPostItem = {
    itemCallback: () => dispatch(showModal()),
    name: 'Create',
  }

  return (
    <div className={s.container}>
      <Sidebar callbacks={[...sidebarCallbacks, logoutItem, createPostItem]} />
      <LogOutModal
        isOpen={showModalLogout}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </div>
  )
}
