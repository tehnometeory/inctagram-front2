import { LogOutModal, useLogout } from '@/features'
import { useMenuHandlers } from '@/shared'
import { showModal, useLogout } from '@/features'
import { useAppDispatch, useMenuHandlers } from '@/shared'
import { Sidebar } from '@rambo-react/ui-meteors'

import s from './SidebarApp.module.scss'

export const SidebarApp = () => {
  const sidebarCallbacks = useMenuHandlers()
  const {isLoading, handleCloseModal, handleConfirmLogout, logoutItem, showModal } = useLogout()
  const dispatch = useAppDispatch()

  const createPostItem = {
    itemCallback: () => dispatch(showModal()),
    name: 'Create',
  }
  return (
    <div className={s.container}>
      <Sidebar callbacks={[...sidebarCallbacks, logoutItem,createPostItem]} />
      <LogOutModal isOpen={showModal} onClose={handleCloseModal} onConfirm={handleConfirmLogout} />
    </div>
  )
}
